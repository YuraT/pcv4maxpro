<template>
  <div class="balance__entire-body">
    <ValidationObserver v-slot="{ invalid }">
      <div class="balance__container">
        <div class="balance__main">
          <div class="balance__main-left">
            <v-avatar size="70">
              <v-img
                :src="'https://pilotcity.s3.us-west-1.amazonaws.com/' + user.profileImg"
              ></v-img>
            </v-avatar>
            <div class="balance__main-left-title">BALANCE</div>
            <div class="balance__main-left-header">{{ tokens.length }} Tokens</div>
            <div>
              <v-icon class="balance__main-left-icon" color="grey" x-large>mdi-set-right</v-icon>
            </div>
            <div class="balance__main-left-chippers">
              <v-chip
                v-for="(owner, index) in modOriginalOwners"
                :key="index"
                dark
                :color="owner.color"
                class="balance__main-left-chips"
                >{{ `${owner.firstName} ${owner.lastName}` }}</v-chip
              >
            </div>
          </div>
          <div class="balance__main-right">
            <div>
              <v-btn
                class="balance__main-right-button white--text font-weight-bold"
                depressed
                color="purple"
                x-large
                @click="$emit('changeTab', 'payment')"
              >
                <v-icon left>mdi-cash-usd</v-icon>Sponsor
              </v-btn>
            </div>

            <div>
              <v-btn
                class="balance__main-right-button white--text font-weight-bold"
                depressed
                color="grey"
                outlined
                x-large
                @click="transferState = !transferState"
                ><v-icon left>mdi-bank-transfer</v-icon>Transfer</v-btn
              >
            </div>
          </div>
        </div>
      </div>
      <div v-show="transferState">
        <div class="balance__transfer-title">Transfer Tokens</div>
        <div class="balance__transfer">
          <div class="balance__email">
            <validation-provider v-slot="{ errors }" rules="required">
              <v-text-field
                v-model="transferEmail"
                :error-messages="errors"
                outlined
                label="Enter recipient's email"
              ></v-text-field>
            </validation-provider>
          </div>

          <div class="balance__tickets">
            <validation-provider v-slot="{ errors }" rules="required">
              <v-text-field
                v-model="transferQuantity"
                :error-messages="errors"
                type="number"
                min="1"
                outlined
                label="# of Tokens"
              ></v-text-field>
            </validation-provider>
          </div>

          <div class="balance__transfer-button">
            <v-btn :disabled="invalid" :dark="!invalid" depressed @click="processTransfer"
              >Transfer</v-btn
            >
          </div>
        </div>
        <div class="balance__table-view">
          <BalanceView ref="balanceTable" />
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { computed, ref, Ref } from '@vue/composition-api';
import { Token, User } from '@/generated/graphql';
import gql from 'graphql-tag';
import { useAuthGetters, useDbState } from '@/store';
import BalanceView from '../components/BalanceView/BalanceView.vue';

export default {
  name: 'Balance',
  components: { BalanceView },
  setup(
    _props,
    {
      root: {
        $apolloProvider: {
          defaultClient: { query, mutate }
        }
      }
    }
  ) {
    const transferState = ref(false);
    // Token Management
    const tokens: Ref<Token[]> = ref([]);
    const originalOwners: Ref<Pick<User, 'firstName' | 'lastName'>[]> = ref([]);
    const id = useAuthGetters(['getId']).getId;
    query<{ tokens: Token[] }>({
      query: gql`
        query myTokensOwner($id: ObjectId!) {
          tokens(query: { newOwner_id: $id }) {
            _id
            owner_id
          }
        }
      `,
      variables: { id: id.value }
    }).then(async ({ data }) => {
      const tokenOwners = data.tokens.map(token => ({ _id: token.owner_id }));
      if (tokenOwners.length)
        originalOwners.value = (
          await query<{ users: User[] }>({
            query: gql`
              query Users($userQueryInputs: [UserQueryInput!]) {
                users(query: { OR: $userQueryInputs }) {
                  firstName
                  lastName
                }
              }
            `,
            variables: { userQueryInputs: tokenOwners }
          })
        ).data.users;
    });
    // UI Management
    const colors = ['red', 'orange', 'blue', 'purple', 'pink', 'yellow'];
    const modOriginalOwners = computed(() =>
      originalOwners.value.map(owner => ({
        ...owner,
        color: colors[Math.floor(Math.random() * (colors.length - 1))]
      }))
    );
    // Transfer Management
    const transferEmail = ref('');
    const transferQuantity = ref(0);
    const processTransfer = async () => {
      await mutate({
        mutation: gql`
          mutation transferTokens(
            $senderId: ObjectId!
            $recipientEmail: String!
            $tokenIds: [ObjectId!]
          ) {
            sendTokensMutation(
              input: {
                token_ids: $tokenIds
                sender_id: $senderId
                recipient_email: $recipientEmail
              }
            ) {
              recipient {
                firstName
                lastName
              }
              timestamp
              tokensSent
            }
          }
        `,
        variables: {
          recipientEmail: transferEmail.value,
          senderId: id.value,
          tokenIds: tokens.value.map(token => token._id).slice(0, transferQuantity.value)
        }
      });
    };
    return {
      transferState,
      tokens,
      originalOwners,
      modOriginalOwners,
      transferEmail,
      processTransfer,
      transferQuantity,
      user: useDbState(['user']).user
    };
  }
};
</script>

<style lang="scss">
.balance {
  &__container {
    margin-top: 70px;

    display: flex;
    flex-direction: row;

    padding-left: 0%;
    padding-right: 0%;
  }

  &__main {
    flex-direction: column;
    display: flex;
    width: 100%;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }

  &__main {
    flex-direction: row;
    display: flex;
  }

  &__main-left {
    border-right: 3px solid #dedede;

    text-align: center;
    width: 55%;
    flex-direction: row;
  }

  &__main-right {
    text-align: center;
    width: 45%;

    flex-direction: row;
  }

  &__main-right-button {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  &__main-left-title {
    letter-spacing: 2px;
    font-family: Raleway;
    font-weight: 900;
    color: #9e9e9e;
    margin-top: 25px;
  }

  &__main-left-header {
    font-family: Raleway;
    font-size: 55px;
    font-weight: 800;

    color: #d5d5d5;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &__main-left-chippers {
    margin-bottom: 25px;
  }

  &__main-left-chips {
    font-family: Raleway;
    font-weight: 700;

    margin: 10px;
  }

  &__main-left-icon {
    margin-bottom: 30px;
  }

  &__table-view {
    padding-left: 40px;
    padding-right: 40px;
  }

  &__transfer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
  }

  &__transfer-title {
    text-align: center;
    margin-top: 75px;
    font-family: Raleway;
    font-size: 32px;
    font-weight: 800;
    color: #000000;
  }

  &__tickets {
    width: 15%;
    margin: 10px;
  }

  &__email {
    width: 30%;
    margin: 10px;
  }

  &__transfer-button {
    margin: 10px;
  }
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 57px;
}
</style>
