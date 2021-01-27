<template>
  <div class="all-invites__entire-body">
    <IndexTable v-slot="{ indexedItems, indexHandler }" :items="items">
      <v-data-table
        :headers="header"
        :items="indexedItems"
        sort-by="index"
        @current-items="indexHandler"
      >
        <!-- <template v-slot:item.pending v-slot.pending="{ item }">
          {{ item }}
          <v-btn small class="all-invites__pending" depressed color="green" :ripple="false">
            Remind
          </v-btn>
        </template> -->
      </v-data-table>
    </IndexTable>
  </div>
</template>

<script lang="ts">
import { Ref, ref } from '@vue/composition-api';
import IndexTable from '@/components/IndexTable.vue';
import gql from 'graphql-tag';
import { Transaction, TransactionQueryInput, User, UserQueryInput } from '@/generated/graphql';
import { useAuthGetters } from '@/store';
import { keyBy } from 'lodash';
import { HEADER } from './const';

export default {
  name: 'AllInvites',
  components: {
    IndexTable
  },

  setup(
    _props,
    {
      root: {
        $apolloProvider: {
          defaultClient: { query }
        }
      }
    }
  ) {
    const tableItems: Ref<any> = ref([]);
    query<{ transaction: Transaction }>({
      query: gql`
        query refferalLog($input: TransactionQueryInput!) {
          transaction(query: $input) {
            referral {
              sentTo
              timestamp
            }
          }
        }
      `,
      variables: {
        input: {
          _id: useAuthGetters(['getId']).getId.value
        } as TransactionQueryInput
      }
    }).then(({ data: { transaction } }) => {
      if (transaction?.referral)
        query<{ users: User[] }>({
          query: gql`
            query referalLogUsers($input: UserQueryInput!) {
              users(query: $input) {
                _id
                email
              }
            }
          `,
          variables: {
            input: {
              OR: [...transaction.referral?.map(log => ({ email: log!.sentTo }))]
            } as UserQueryInput
          }
        }).then(({ data: { users } }) => {
          const usersByEmail = keyBy(users, 'email');
          tableItems.value = transaction.referral?.map(log => ({
            contact: log?.sentTo,
            date: log?.timestamp,
            status: usersByEmail[log?.sentTo!] ? 'accepted' : 'pending'
          }));
        });
    });
    return { header: ref(HEADER), items: tableItems };
  }
};
</script>

<style lang="scss">
.all-invites {
  &__entire-body {
    width: 100%;
    padding: 0px 10px 0px 10px;
  }
  &__pending {
    .v-btn__content {
      color: white;
    }
    &.v-btn {
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>
