import { RouteConfig } from 'vue-router';
import Guide from './Guide.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/guide/:programId/:page',
    name: 'guide',
    component: Guide,
    meta: {
      layout: 'no-nav'
    }
  }
];

export default routes;
