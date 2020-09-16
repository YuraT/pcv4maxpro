import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { DbActions } from './modules/db/actions';
import { AuthGetters } from './modules/auth/getters';
import { AuthActions } from './modules/auth/actions';
import { FileStorageActions } from './modules/fileStorage/actions';
import { RealmAppGetters } from './modules/realmApp/getters';
import { ToolActions } from './modules/tools/actions';
import { ToolGetters } from './modules/tools/getters';
import auth from './modules/auth';
import realmApp from './modules/realmApp';
import { RootState } from './state';
import tools from './modules/tools';
import fileStorage from './modules/fileStorage';
import db from './modules/db';
import toolState from './modules/tools/state';
import realmAppState from './modules/realmApp/state';
import fileStorageState from './modules/fileStorage/state';
import authState from './modules/auth/state';
import dbState from './modules/db/state';

Vue.use(Vuex);
// * Declare a vuex store w/out a root state
// Everything will be modular

const store: StoreOptions<RootState> = {
  modules: {
    auth,
    realmApp,
    tools,
    fileStorage,
    db
  }
};
const vuexStore = new Vuex.Store<RootState>(store);
export default vuexStore;
export const {
  useState: useToolState,
  useGetters: useToolGetters,
  useMutations: useToolMutations,
  useActions: useToolActions
} = createNamespacedHelpers<typeof toolState, ToolGetters, ToolActions, any>(vuexStore, 'tools');
export const {
  useState: useRealmAppState,
  useGetters: useRealmAppGetters,
  useMutations: useRealmAppMutations,
  useActions: useRealmAppActions
} = createNamespacedHelpers<typeof realmAppState, RealmAppGetters, any, any>(vuexStore, 'realmApp');
export const {
  useState: useFileStorageState,
  useGetters: useFileStorageGetters,
  useMutations: useFileStorageMutations,
  useActions: useFileStorageActions
} = createNamespacedHelpers<typeof fileStorageState, any, FileStorageActions, any>(
  vuexStore,
  'fileStorage'
);
export const {
  useState: useAuthState,
  useGetters: useAuthGetters,
  useMutations: useAuthMutations,
  useActions: useAuthActions
} = createNamespacedHelpers<typeof authState, AuthGetters, AuthActions, any>(vuexStore, 'auth');
export const {
  useState: useDbState,
  useGetters: useDbGetters,
  useMutations: useDbMutations,
  useActions: useDbActions
} = createNamespacedHelpers<typeof dbState, any, DbActions, any>(vuexStore, 'db');
