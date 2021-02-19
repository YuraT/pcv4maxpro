import { RouteConfig } from 'vue-router';
import CreateProgram from './CreateProgram.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/createprogram',
    name: 'createprogram',
    component: CreateProgram
  }
];

export default routes;
