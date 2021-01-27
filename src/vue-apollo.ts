import VueApollo from 'vue-apollo';
import { useRealmAppState } from '@/store';
import { setContext } from 'apollo-link-context';
import { ApolloClient } from 'apollo-boost';

import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const { app } = useRealmAppState(['app']);
// Install the vue plugin
// Name of the localStorage item
const AUTH_TOKEN = 'apollo-token';

//  Mongo App Setup

// Creates needed headers
const httpEndpoint =
  process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_GRAPHQL_HTTP
    : process.env.VUE_APP_GRAPHQL_HTTP_DEV;
const httpLink = createHttpLink({ uri: httpEndpoint });

const authorizationHeaderLink = () =>
  setContext(async (_, { headers }) => {
    if (app.value.currentUser) {
      // Refreshing custom data also refreshes the access token
      await app.value.currentUser.refreshCustomData();
    } else {
      // If no user is logged in, log in an anonymous user
      // await app.logIn(RealmWeb.Credentials.anonymous());
    }
    // Get a valid access token for the current user
    const accessToken = app.value.currentUser?.accessToken;

    // Set the Authorization header, preserving any other headers
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`
      }
    };
  });
const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  httpEndpoint,
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  wsEndpoint: null,
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,

  // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.

  link: authorizationHeaderLink().concat(httpLink),

  // Override default cache
  cache: new InMemoryCache()

  // Override the way the Authorization header is set
  // getAuth: (tokenName) => ...

  // Additional ApolloClient options
  // apollo: { ... }

  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
};
const apolloClient = new ApolloClient({
  ...defaultOptions,
  connectToDevTools: process.env.NODE_ENV === 'development'
});

export async function onLogin(token) {
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
  try {
    await apolloClient.resetStore();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (login)', 'color: orange;', e.message);
  }
}

// Manually call this when user log out
export async function onLogout() {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN);
  }
  try {
    await apolloClient.resetStore();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
  }
}
const provider = new VueApollo({
  defaultClient: apolloClient
});
export default provider;
// watchEffect(() => {
//   if (app.value.currentUser) {
//     onLogin(app.value.currentUser.accessToken);
//   } else {
//     onLogout();
//   }
// });
