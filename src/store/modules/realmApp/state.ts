import * as Realm from 'realm-web';

const state: { app: Realm.App } = {
  app: new Realm.App({
    id:
      process.env.NODE_ENV === 'production'
        ? process.env.VUE_APP_REALM_ID
        : process.env.VUE_APP_REALM_ID_DEV,
    baseUrl: 'https://realm.mongodb.com'
  })
};
export default state;
