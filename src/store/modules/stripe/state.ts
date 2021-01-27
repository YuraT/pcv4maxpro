import { loadStripe } from '@stripe/stripe-js';

const state = {
  stripePromise: loadStripe(
    process.env.NODE_ENV === 'production'
      ? 'pk_live_51HLdB4LnkQGEgDQnXGptKroG5ZA55RvdG1jpcnVPMsIhtGhzEaiuyozyHOXQs6UvJQ3A23cPmszUyMByLhXuUX7i00YVOZNJTl'
      : 'pk_test_51HLdB4LnkQGEgDQnafDjpychGkVt5DxQFpiZR1hDvLyPDkfsH8PrxmbyCy2G5ZJDPfKjR7GKt1SR4ylbiyehXuma00KrfKoSFC',
    { apiVersion: '2020-08-27' }
  )
};
export default state;
