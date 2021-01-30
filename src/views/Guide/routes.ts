import { RouteConfig } from 'vue-router';
import Guide from './Guide.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/guide/:programId',
    name: 'guide',
    component: Guide
  }
];

export default routes;
