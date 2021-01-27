import { RouteConfig } from 'vue-router';
import Portfolio from './Portfolio.vue';
import Setup from './SetupPortfolio.vue';
import { BalanceView } from './components';

const routes: Array<RouteConfig> = [
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
    meta: {
      requiresAuth: true,
      requiresUser: true
    }
  },
  {
    path: '/setup',
    name: 'setup',
    component: Setup,
    meta: {
      layout: 'no-nav',
      requiresAuth: true
    }
  },
  {
    path: '/balanceview',
    name: 'balanceview',
    component: BalanceView
  }
];

export default routes;
