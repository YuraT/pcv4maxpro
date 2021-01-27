// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Stripe } from 'stripe';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      VUE_APP_REALM_ID: string;
      VUE_APP_REALM_ID_DEV: string;
      VUE_APP_S3_ACCESS_KEY_ID: string;
      VUE_APP_S3_SECRET_ACCESS_KEY: string;
      VUE_APP_S3_REGION: string;
      VUE_APP_S3_BUCKET_NAME: string;
      VUE_APP_S3_BUCKET_NAME_DEV: string;
      VUE_APP_STRIPE_CHECKOUT_DEV: string;
      VUE_APP_STRIPE_CHECKOUT_PROD: string;
      VUE_APP_STRIPE_INVOICE_DEV: string;
      VUE_APP_STRIPE_INVOICE_PROD: string;
      VUE_APP_GRAPHQL_HTTP: string;
      VUE_APP_GRAPHQL_HTTP_DEV: string;
    }
  }
  namespace Realm {
    type MongoFunctions = 'getProductInfo';
    interface BaseFunctionsFactory {
      callFunction(
        name: 'getProductInfo',
        priceId: string
      ): Promise<{
        statusCode: number;
        body: {
          price: Stripe.Response<Stripe.Price>;
          product: Stripe.Response<Stripe.Product>;
        };
      }>;
      callFunction(
        name: 'getProductInfo',
        priceId: string[]
      ): Promise<{
        statusCode: number;
        body: {
          price: Stripe.Response<Stripe.Price>;
          product: Stripe.Response<Stripe.Product>;
        }[];
      }>;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
