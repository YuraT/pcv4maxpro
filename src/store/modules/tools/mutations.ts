/* eslint-disable no-console */
import { MutationTree } from 'vuex';
import toolState from './state';

export const enum MutationTypes {
  LOADING_START = '🔃 Loading Started',
  LOADING_END = '🏁 Loading Finished',
  GLOBAL_TOOL_ERR = '🌐❌ Global Tooling Error'
}
export const mutations: MutationTree<typeof toolState> = {
  [MutationTypes.LOADING_START](state) {
    state.navLinearLoading = true;
  },
  [MutationTypes.LOADING_END](state) {
    state.navLinearLoading = false;
  },
  [MutationTypes.GLOBAL_TOOL_ERR](state, err) {
    state.error = err;
    console.error('Could not modify global tools state');
  }
};
