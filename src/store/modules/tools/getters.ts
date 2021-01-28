import { GetterTree } from 'vuex';
import { RootState } from '../../state';
import toolState from './state';

export const enum GetterTypes {
  getLinearLoading = 'linearLoading'
}
type AuthGetterCtx<T> = (
  state: typeof toolState,
  getters: any,
  rootState: RootState,
  rootGetters: any
) => T;
export interface ToolGetters extends GetterTree<typeof toolState, RootState> {
  getLinearLoading: AuthGetterCtx<boolean>;
}
export const getters: GetterTree<typeof toolState, RootState> = {
  getLinearLoading: state => state.navLinearLoading
};
