import { RouteConfig } from 'vue-router';
import Select from './Select.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/select',
    name: 'select',
    component: Select
  }
];

export default routes;