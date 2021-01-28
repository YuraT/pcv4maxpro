import { RouteConfig } from 'vue-router';
import Setup from './setupprogram.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/setup-program',
    name: 'Setup',
    component: Setup
  }
];

export default routes;
