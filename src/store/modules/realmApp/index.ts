import { Module } from 'vuex';
import { RootState } from '@/store/state';
import state from './state';
// Returns the shared instance of the Realm app.
const realmApp: Module<typeof state, RootState> = {
  namespaced: true,
  state
};
export default realmApp;
