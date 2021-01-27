import VueRouter from 'vue-router';
import { useAuthGetters } from '@/store';
import { watch } from '@vue/composition-api';

const { getUser } = useAuthGetters(['getUser']);
const redirectIfLoggedIn = ($router: VueRouter) =>
  watch(
    getUser,
    user => {
      if (user) {
        $router.push({ name: 'setup' });
      }
    },
    {
      immediate: true
    }
  );
// eslint-disable-next-line import/prefer-default-export
export { redirectIfLoggedIn };
