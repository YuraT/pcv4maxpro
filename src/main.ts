import Vue from 'vue';
import './installCompositionApi';
import './store/watchers';
import { ValidationObserver, ValidationProvider } from '@/validation';

import VueApollo from 'vue-apollo';
import provider from '@/vue-apollo';
import VueMask from 'v-mask';
import * as Layouts from './layouts';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(VueApollo);

Vue.config.productionTip = false;

Vue.component('default-layout', Layouts.Default);
Vue.component('no-nav-layout', Layouts.NoNav);
Vue.component('landing-layout', Layouts.Landing);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(VueMask);
Vue.use(VueApollo);
new Vue({
  apolloProvider: provider,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
