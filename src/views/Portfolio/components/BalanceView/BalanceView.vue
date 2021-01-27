<template>
  <div class="balance-view__entire-body">
    <IndexTable v-slot="{ indexedItems, indexHandler }" :items="items">
      <v-data-table
        :headers="header"
        :items="indexedItems"
        sort-by="index"
        @current-items="indexHandler"
      >
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
import moment from 'moment';
import { items, HEADER } from './const';

export default {
  name: 'BalanceView',
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
    const { getObjectId } = useAuthGetters(['getObjectId']);
    const tableItems: Ref<typeof items> = ref([]);
    const process = () =>
      query<{ transaction: Transaction }>({
        query: gql`
          query getTransferHistrory($query: TransactionQueryInput!) {
            transaction(query: $query) {
              tokenLog {
                event
                timestamp
                tokensSent
                sentTo
              }
            }
          }
        `,
        variables: {
          query: { _id: getObjectId.value }
        } as TransactionQueryInput
      }).then(({ data: { transaction } }) => {
        if (transaction && transaction.tokenLog)
          query<{ users: User[] }>({
            query: gql`
              query getNames($nameQuery: UserQueryInput!) {
                users(query: $nameQuery) {
                  _id
                  firstName
                  lastName
                }
              }
            `,
            variables: {
              nameQuery: {
                OR: [...transaction.tokenLog.map(item => ({ _id: item!.sentTo }))]
              } as UserQueryInput
            }
          }).then(({ data: { users } }) => {
            const keyedUsers = keyBy(users, '_id');
            tableItems.value = transaction.tokenLog!.map(log => {
              const userAccess = keyedUsers[log?.sentTo || log?.receivedFrom];
              return {
                name: `${userAccess.firstName} ${userAccess.lastName}`,
                date: moment(log!.timestamp).fromNow(),
                amount: `${log!.tokensSent}`
              };
            });
          });
      });
    process();
    return { header: ref(HEADER), items: tableItems, process };
  }
};
</script>

<style lang="scss">
.balance-view {
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
