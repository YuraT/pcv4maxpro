import { GetterTree } from 'vuex';
import { User } from 'realm-web';
import { ObjectId } from 'bson';
import { RootState } from '../../state';
import authState from './state';

export const enum GetterTypes {
  getUser = 'getUser',
  getId = 'getId',
  getObjectId = 'getObjectId'
}
type AuthGetterCtx<T> = (
  state: typeof authState,
  getters: any,
  rootState: RootState,
  rootGetters: any
) => T;
export interface AuthGetters extends GetterTree<typeof authState, RootState> {
  getUser: AuthGetterCtx<User<Realm.DefaultFunctionsFactory, any> | null>;
  getId: AuthGetterCtx<string | null>;
  getObjectId: AuthGetterCtx<ObjectId | null>;
}
export const getters: AuthGetters = {
  getUser: (_state, _gets, rootState) => {
    return rootState.realmApp.app.currentUser;
  },
  getId: (_state, gets) => {
    return gets.getUser?.id || null;
  },
  getObjectId: (_state, gets) => {
    if (gets.getUser?.id) return new ObjectId(gets.getUser?.id);
    return null;
  }
};
