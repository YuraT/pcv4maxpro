import { ActionContext, ActionTree } from 'vuex';
import { StripeError } from '@stripe/stripe-js';
import { RootState } from '../../state';
import stripeState from './state';

export enum ActionTypes {
  createCheckoutSession = 'createCheckoutSession'
}
type StripeActionCtx = ActionContext<typeof stripeState, RootState>;
export interface StripeActions extends ActionTree<typeof stripeState, RootState> {
  createCheckoutSession: (
    ctx: StripeActionCtx,
    payload: {
      lineItems: { priceId: string; quantity: number }[];
      successUrl?: string;
      cancelUrl: string;
      metadata?: Record<string, string>;
    }
  ) => Promise<{
    error: StripeError;
  }>;
  createInvoice: (
    ctx: StripeActionCtx,
    payload: { lineItems: { priceId: string; quantity: number }[] }
  ) => Promise<any>;
}
export const actions: StripeActions = {
  async createCheckoutSession(
    { state, rootState },
    { lineItems, successUrl, cancelUrl, metadata }
  ) {
    return fetch(
      process.env.NODE_ENV === 'production'
        ? process.env.VUE_APP_STRIPE_CHECKOUT_PROD
        : process.env.VUE_APP_STRIPE_CHECKOUT_DEV,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // eslint-disable-next-line @typescript-eslint/camelcase
          lineItems: lineItems.map(item => ({
            price: item.priceId,
            quantity: item.quantity
          })),
          successUrl,
          cancelUrl,
          customerId: rootState.db.user?.stripeId,
          metadata
        })
      }
    ).then(async response => {
      const session = await response.json();
      if (response.status === 400) throw session.error.raw.message;
      return (await state.stripePromise)!.redirectToCheckout({ sessionId: session.id });
    });
  },
  async createInvoice({ rootState }, { lineItems }) {
    return fetch(
      process.env.NODE_ENV === 'production'
        ? process.env.VUE_APP_STRIPE_INVOICE_PROD
        : process.env.VUE_APP_STRIPE_INVOICE_DEV,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // eslint-disable-next-line @typescript-eslint/camelcase
          lineItems: lineItems.map(item => ({
            price: item.priceId,
            quantity: item.quantity
          })),
          customerId: rootState.db.user?.stripeId
        })
      }
    ).then(async response => {
      return response.json();
    });
  }
};
