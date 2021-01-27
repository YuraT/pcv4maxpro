import { watch } from '@vue/composition-api';
import store, { useAuthGetters, useDbGetters } from '@/store';
import { ObjectId } from 'bson';
import { MutationTypes } from './modules/db/mutations';

const { getUser } = useAuthGetters(['getUser']);
const { collection } = useDbGetters(['collection']);
// eslint-disable-next-line import/prefer-default-export
export const setUser = watch(
  getUser,
  async newUser => {
    if (newUser) {
      const user = await collection.value!('User').findOne({ _id: new ObjectId(newUser.id) });
      store.commit(`db/${MutationTypes.setUser}`, user);
    }
  },
  {
    immediate: true
  }
);
