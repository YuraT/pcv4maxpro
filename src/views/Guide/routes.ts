import { RouteConfig } from 'vue-router';
import Guide from './Guide.vue';
import Bar from './Bar.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/guide',
    name: 'Guide',
    component: Guide
  },
  {
    path: '/guide/:param',
    name: 'Guide-Component',
    props: true,
    component: Bar
  }
];

export default routes;
