import { RouteConfig } from 'vue-router';
import * as Program from './views';
import { Nav, ListView } from './components';
import ProgramManage from './ProgramManage.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/program/manage',
    name: 'Manage',
    component: Program.Manage
  },
  {
    path: '/program/participants',
    name: 'Participants',
    component: Program.Participants
  },
  {
    path: '/program/editprogram',
    name: 'Editprogram',
    component: Program.EditProgram
  },
  {
    path: '/program/managestakeholder',
    name: 'ManageStakeholder',
    component: Program.ManageStakeholder
  },
  { path: '/ListView', name: 'Listview', component: ListView },
  {
    path: '/manage/program',
    name: 'ProgramManage',
    component: ProgramManage
  }
];
if (process.env.node_env === 'development') {
  routes.push({
    path: '/nav',
    name: 'nav',
    component: Nav
  });
  if (process.env.node_env === 'development') {
    routes.push({
      path: '/ListView',
      name: 'Listview',
      component: ListView
    });
  }
}
export default routes;
