import { RootState } from '@/store/state';
import { ActionTree, ActionContext } from 'vuex';
import { Stripe } from 'stripe';
import { DbGetters } from './getters';
import { Collection, getCollectionType } from '../../../@types/collections.d';
import dbState from './state';

export enum ActionTypes {
  create = 'create',
  update = 'update',
  getProductInfo = 'getProductInfo'
}
// type DbActionsCtx = { getters: DbGetters } & ActionContext<typeof dbState, RootState>;
interface DbActionsCtx extends ActionContext<typeof dbState, RootState> {
  getters: {
    collection: ReturnType<DbGetters['collection']>;
    functions: ReturnType<DbGetters['functions']>;
  };
}
export interface DbActions extends ActionTree<typeof dbState, RootState> {
  create: <T extends keyof typeof Collection>(
    ctx: DbActionsCtx,
    payload: { collection: T; payload: getCollectionType<T> }
  ) => Promise<Realm.Services.MongoDB.InsertOneResult<getCollectionType<T>['_id']>>;
  update: <T extends keyof typeof Collection>(
    ctx: DbActionsCtx,
    payload: {
      collection: T;
      payload: getCollectionType<T>;
      filter: { [x: string]: any };
      options?: { upsert: boolean };
    }
  ) => Promise<getCollectionType<T> | null>;
  getProductInfo: (
    ctx: DbActionsCtx,
    payload: { priceId: string }
  ) => Promise<{
    statusCode: number;
    body: {
      price: Stripe.Response<Stripe.Price>;
      product: Stripe.Response<Stripe.Product>;
    };
  }>;
  getProductInfos: (
    ctx: DbActionsCtx,
    payload: { priceId: string[] }
  ) => Promise<{
    statusCode: number;
    body: {
      price: Stripe.Response<Stripe.Price>;
      product: Stripe.Response<Stripe.Product>;
    }[];
  }>;
}
export const actions: DbActions = {
  async create({ getters }, { collection, payload }) {
    return getters.collection!<typeof payload>(collection).insertOne(payload);
  },
  async update({ getters }, { collection, payload, filter, options }) {
    return getters.collection!<typeof payload>(collection).findOneAndUpdate(
      filter,
      {
        $set: payload
      },
      options
    );
  },
  async getProductInfo({ getters }, { priceId }) {
    const res = await getters.functions.callFunction('getProductInfo', priceId);
    if (res.statusCode === 500) throw res.body;
    return res;
  },
  async getProductInfos({ getters }, { priceId }) {
    const res = await getters.functions.callFunction('getProductInfo', priceId);
    if (res.statusCode === 500) throw res.body;
    return res;
  }
};
