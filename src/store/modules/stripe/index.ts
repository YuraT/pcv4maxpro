import { Module } from 'vuex';
import stripeState from './state';

import { RootState } from '../../state';
import { actions } from './actions';

const stripe: Module<typeof stripeState, RootState> = {
  namespaced: true,
  state: stripeState,
  actions
};
export default stripe;
