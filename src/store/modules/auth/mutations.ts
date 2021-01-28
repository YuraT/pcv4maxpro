/* eslint-disable no-console */
import { MutationTree } from 'vuex';
import authState from './state';

export const enum MutationTypes {
  LOGIN_ANON = '🐱‍👤✔ Login Anonymous',
  LOGIN_ERROR = '🔐❌ Login Error',
  LOGIN_USER = '😎✔ Login User',
  SIGNUP = '🔏📧✔ Confirmation Email Sent',
  SIGNUP_ERROR = '🔏❌ Signup Error',
  LOGOUT = '👋✔ Logged Out',
  LOGOUT_ERROR = '👋❌Log Out failed',
  CONFIRMED_USER = '🔍👤 Confirmed User',
  CONFIRMATION_ERROR = '🔍❌ User Confirmation Failed',
  PASSWORD_RESET = '🔃🔒 Password Reset',
  PASSWORD_RESET_ERROR = '🔃🔒❌ Password Reset Error'
}
export const mutations: MutationTree<typeof authState> = {
  [MutationTypes.LOGIN_ANON](state, user: typeof authState.user) {
    state.user = user;
  },
  [MutationTypes.LOGIN_USER](state, user: typeof authState.user) {
    state.user = user;
  },
  [MutationTypes.LOGIN_ERROR](state, errorCode: string) {
    state.error = errorCode;
    console.error('Could not login');
  },
  [MutationTypes.SIGNUP_ERROR](state, errorCode: string) {
    state.error = errorCode;
    console.error('Could not send confirmation');
  },
  [MutationTypes.SIGNUP]: () => {},
  [MutationTypes.LOGOUT]: () => {},
  [MutationTypes.LOGOUT_ERROR](state, errorCode: string) {
    state.error = errorCode;
    console.error(errorCode);
  },
  [MutationTypes.CONFIRMED_USER]: () => {},
  [MutationTypes.CONFIRMATION_ERROR](state, errorCode: string) {
    state.error = errorCode;
    console.error('Could not verify email');
  },
  [MutationTypes.PASSWORD_RESET]: () => {},
  [MutationTypes.PASSWORD_RESET_ERROR](state, errorCode: string) {
    state.error = errorCode;
    console.error('Could not reset password');
  }
};
