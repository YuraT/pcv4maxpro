import { RouteConfig } from 'vue-router';
import * as Program from './views';

const routes: Array<RouteConfig> = [
  {
    path: '/select',
    name: 'select',
    component: Program.Select
  }
];

export default routes;
