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
                color="blue"
                x-large
                @click="$emit('changeTab', 'payment')"
              >
                <v-icon left>mdi-cash-usd</v-icon>Buy Tokens
              </v-btn>
            </div>
            <!-- <div>
              <v-btn
                class="balance__main-right-button white--text font-weight-bold"
                depressed
                color="red"
                x-large
                @click="sponsorState = !sponsorState"
              >
                <v-icon left>mdi-trophy</v-icon>Sponsor
              </v-btn>
            </div> -->
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

      <div v-show="sponsorState">
        <div class="balance__transfer-title">Sponsor Participants</div>
        <!-- <div class="balance__transfer">
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
        </div> -->
        <div class="d-flex justify-center pt-6">
          <div class="sponsor__details-avatar ml-4 mr-4">
            <Profile :size="60" />
          </div>
          <div class="d-flex justify-center">
            <v-text-field
              height="60"
              outlined
              rounded
              label="Sponsor"
              class="balance__details-name font-weight-bold"
              hint="Choose your public display name"
              :placeholder="`${user.firstName} ${user.lastName}`"
            ></v-text-field>
          </div>
        </div>

        <div class="d-flex justify-center flex-column">
          <div class="d-flex justify-center">
            <v-switch v-model="switchOn" color="green" inset label="Automatic approval"></v-switch>
          </div>
          <div class="d-flex justify-center">
            <v-switch v-model="switchOn" color="green" inset label="Rebranding welcomed"></v-switch>
          </div>
          <div class="d-flex justify-center">
            <v-switch
              v-model="switchOn"
              color="green"
              inset
              label="Redistribution allowed"
            ></v-switch>
          </div>

          <div class="d-flex justify-center">
            <v-switch v-model="switchOn" color="green" inset label="Monitoring Access"></v-switch>
          </div>
          <div class="d-flex justify-center">
            <v-switch v-model="switchOn" color="green" inset label="One time use"></v-switch>
          </div>

          <div class="d-flex justify-center">
            <v-switch
              v-model="switchOn"
              color="green"
              inset
              label="Organizer-allowed use"
            ></v-switch>
          </div>
        </div>

        <div class="d-flex justify-center pt-6">
          <div class="d-flex justify-center">
            <v-select
              v-model="estimatedNumber"
              placeholder="100 tokens"
              outlined
              class="balance__estimated-number font-weight-bold"
              rounded
              x-large
            ></v-select>
          </div>
        </div>

        <div class="d-flex justify-center pt-6">
          <div class="d-flex justify-center">
            <v-textarea
              class="balance__welcome-message"
              rounded
              outlined
              value="Welcome aboard! We're rooting for you."
              label="Personalize your welcome message"
            ></v-textarea>
          </div>
        </div>

        <div class="d-flex justify-center pt-6">
          <v-btn class="ml-2 mr-2" x-large rounded outlined depressed> Save </v-btn>
          <v-btn class="ml-2 mr-2" x-large rounded dark depressed>Generate Sponsorship Link</v-btn>
        </div>

        <div class="d-flex flex-row justify-center mt-12 mb-6">
          <v-btn class="ml-2 mr-2" dark x-small depressed>Sponsorships</v-btn
          ><v-btn class="ml-2 mr-2" x-small outlined depressed>Requests</v-btn>
        </div>
        <div class="balance__table-view">
          <BalanceView ref="balanceTable" />
        </div>
      </div>
      <div v-show="transferState">
        <div class="balance__transfer-title">Transfer Tokens</div>
        <div class="balance__transfer">
          <div class="balance__email">
            <validation-provider v-slot="{ errors }" rules="required">
              <v-text-field
                v-model="transferEmail"
                rounded
                x-large
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
                rounded
                x-large
                label="# of Tokens"
              ></v-text-field>
            </validation-provider>
          </div>

          <div class="balance__transfer-button">
            <v-btn
              x-large
              rounded
              :disabled="invalid"
              :dark="!invalid"
              depressed
              @click="processTransfer"
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
import Profile from '@/components/Profile.vue';
import BalanceView from '../components/BalanceView/BalanceView.vue';

export default {
  name: 'Balance',
  components: { Profile, BalanceView },
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
    const sponsorState = ref(false);
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
      tokens.value = data.tokens;
      const tokenOwners = data.tokens.map(token => ({ _id: token.owner_id }));
      if (tokenOwners.length)
        originalOwners.value = (
          await query<{ users: User[] }>({
            query: gql`
              query Users($userQueryInputs: [UserQueryInput!]) {
                users(query: { OR: $userQueryInputs }) {
                  _id
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
      switchOn: true,
      estimatedNumber: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      transferState,
      sponsorState,
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
  &__welcome-message {
    width: 400px;
  }
  &__estimated-number {
    width: 175px;
  }
  &__details-name {
    font-family: Raleway;
    font-size: 25px;
    width: 400px;
  }
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
