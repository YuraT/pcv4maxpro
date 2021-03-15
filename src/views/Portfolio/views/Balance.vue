<template>
  <div class="balance__entire-body">
    <ValidationObserver v-slot="{ invalid }">
      <div class="balance__container">
        <div class="balance__main">
          <div class="balance__main-left">
            <Profile :size="70" />
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
                >{{ sponsorName(owner) }}</v-chip
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
            <div>
              <v-btn
                class="balance__main-right-button white--text font-weight-bold"
                depressed
                color="red"
                x-large
                @click="sponsorState = !sponsorState"
              >
                <v-icon left>mdi-trophy</v-icon>Sponsor
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
          <v-row class="d-flex justify-center balance__center-stage">
            <div class="sponsor__details-avatar ma-2">
              <Profile :size="60" />
            </div>
            <div class="ma-2">
              <v-select
                v-model="sponsorId"
                :items="originalOwners"
                :item-text="item => sponsorName(item)"
                item-value="_id"
                :error-messages="errors"
                height="60"
                outlined
                rounded
                label="Choose Sponsor"
                class="balance__details-name font-weight-bold"
                hint="Pick from available token sources"
                @input="updateSponsorQuantity"
              >
              </v-select>
            </div>
            <div class="ma-2">
              <v-text-field
                v-model="sponsorQuantity"
                :error-messages="errors"
                type="number"
                height="60"
                outlined
                rounded
                min="1"
                label="Token Quantity"
                class="balance__token-amount font-weight-bold"
                hint="Choose amount"
                placeholder="0"
              ></v-text-field>
            </div>
          </v-row>
        </div>

        <div class="d-flex justify-center flex-column">
          <!-- <div class="d-flex justify-center">
            <v-switch
              v-model="switchOn"
              color="green"
              inset
              label="Automatic approval of token use by sponsor"
            ></v-switch>
          </div> -->
          <div class="d-flex justify-center">
            <v-switch
              v-model="autoMonitor"
              color="green"
              inset
              label="Automatic access to monitor student activities as sponsor"
            ></v-switch>
          </div>
          <div class="d-flex justify-center">
            <v-switch
              v-model="oneTimeUse"
              color="green"
              inset
              label="One time use per student"
            ></v-switch>
          </div>
          <!-- <div class="d-flex justify-center">
            <v-switch v-model="switchOn" color="green" inset label="Rebranding welcomed"></v-switch>
          </div> -->
          <!-- <div class="d-flex justify-center">
            <v-switch
              v-model="switchOn"
              color="green"
              inset
              label="Redistribution allowed"
            ></v-switch>
          </div> -->

          <!-- <div class="d-flex justify-center">
            <v-switch
              v-model="switchOn"
              color="green"
              inset
              label="Organizer-allowed use"
            ></v-switch>
          </div> -->
        </div>

        <!-- <div class="d-flex justify-center pt-6">
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
        </div> -->

        <div class="d-flex justify-center pt-6 mb-12">
          <v-dialog v-model="shareLinkDialog" persistent max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="ml-2 mr-2"
                color="red"
                x-large
                rounded
                :dark="!!sponsorId.length"
                :disabled="!sponsorId.length"
                depressed
                v-bind="attrs"
                v-on="on"
                @click="createSponsorshipLink"
                >Generate Sponsorship Link</v-btn
              >
            </template>

            <v-card>
              <v-card-title class="d-flex flex-column">
                <div class="d-flex justify-center">
                  <v-icon color="red" large>mdi-trophy</v-icon>
                </div>

                <div class="headline font-weight-bold">Share sponsorship link</div>
              </v-card-title>

              <!-- <v-divider></v-divider> -->

              <div class="d-flex flex-column justify-center pa-5">
                <v-text-field
                  v-model="sponsorshipLink"
                  class="justify-center ma-2"
                  label="Copy & share link"
                  x-large
                  rounded
                  outlined
                  hide-details
                  readonly
                >
                  <v-tooltip slot="append" v-model="showCopiedLinkTooltip" top>
                    <template slot="activator">
                      <v-btn
                        icon
                        @click="
                          copy(sponsorshipLink);
                          showCopiedLinkTooltip = true;
                        "
                      >
                        <v-icon>mdi-content-copy</v-icon>
                      </v-btn>
                    </template>
                    <span>Sponsorship link copied!</span>
                  </v-tooltip>
                </v-text-field>

                <v-textarea
                  v-model="sponsorWelcomeMessage"
                  class="ma-9"
                  rounded
                  auto-grow
                  hide-details
                  outlined
                  label="Personalize your welcome message"
                  append-icon="mdi-content-copy"
                >
                  <v-tooltip slot="append" v-model="showCopiedMessageTooltip" top>
                    <template slot="activator">
                      <v-btn
                        icon
                        @click="
                          copy(sponsorWelcomeMessage);
                          showCopiedMessageTooltip = true;
                        "
                      >
                        <v-icon>mdi-content-copy</v-icon>
                      </v-btn>
                    </template>
                    <span>Sponsorship message copied!</span>
                  </v-tooltip>
                </v-textarea>

                <v-btn class="ma-2" x-large dark rounded depressed @click="shareLinkDialog = false"
                  >Go back</v-btn
                >

                <!-- <div class="d-flex justify-center">
                  <v-btn icon @click="dialog5 = false"><v-icon>mdi-close</v-icon></v-btn>
                </div> -->
              </div>
            </v-card>
          </v-dialog>
        </div>

        <!-- <v-divider></v-divider> -->

        <div class="d-flex flex-row justify-center mt-12 mb-6">
          <!-- <v-btn class="ml-2 mr-2" dark x-small depressed>Sponsorships</v-btn>
          <v-btn class="ml-2 mr-2" x-small outlined depressed>Requests</v-btn> -->
        </div>
        <div class="balance__table-view">
          <SponsorLinksTable
            :items="sponsorLinksTableItems"
            :sponsors="originalOwners"
            @revoke="revokeToken"
          />
        </div>
      </div>
      <div v-show="transferState">
        <div class="balance__transfer-title">Transfer Tokens (Internal testing)</div>
        <div class="balance__transfer">
          <div class="balance__email">
            <validation-provider v-slot="{ errors }" rules="required">
              <v-text-field
                v-model="transferEmail"
                rounded
                x-large
                class="balance__email-font font-weight-bold"
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
                x-large
                outlined
                type="number"
                min="1"
                rounded
                label="Token Quantity"
                class="balance__token-amount font-weight-bold"
                hint="Choose amount"
                placeholder="0"
              ></v-text-field>
            </validation-provider>
          </div>

          <v-dialog v-model="dialog6" persistent max-width="450px">
            <template v-slot:activator="{ on, attrs }">
              <div class="balance__transfer-button">
                <v-btn
                  v-bind="attrs"
                  x-large
                  rounded
                  :disabled="invalid"
                  :dark="!invalid"
                  depressed
                  v-on="on"
                  @click="processTransfer"
                  >Transfer (Internal testing)</v-btn
                >
              </div>
            </template>

            <v-card>
              <v-card-title class="d-flex flex-column">
                <div class="d-flex justify-center">
                  <v-icon class="mb-6 mt-6" color="green" x-large>mdi-check-all</v-icon>
                </div>

                <div class="headline font-weight-bold">Your token has been transferred</div>
              </v-card-title>

              <div class="d-flex flex-row justify-center pa-3">
                <v-btn
                  class="ma-2"
                  x-large
                  rounded
                  outlined
                  depressed
                  @click="
                    () => {
                      dialog6 = false;
                      $router.go(0);
                    }
                  "
                  >Refresh Page</v-btn
                >

                <!-- <v-btn class="ma-2" x-large dark rounded depressed>Transfer</v-btn> -->
              </div>
            </v-card>
          </v-dialog>
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
import { useAuthGetters, useDbState, useDbGetters } from '@/store';
import Profile from '@/components/Profile.vue';
import { ObjectID } from 'bson';
import BalanceView from '../components/BalanceView/BalanceView.vue';
import SponsorLinksTable from '../components/SponsorLinksTable';

export default {
  name: 'Balance',
  components: { Profile, BalanceView, SponsorLinksTable },
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
    const originalOwners: Ref<Pick<User, '_id' | 'firstName' | 'lastName'>[]> = ref([]);
    const id = useAuthGetters(['getId']).getId;
    const fetchTokens = () => {
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
                    sponsorName
                  }
                }
              `,
              variables: { userQueryInputs: tokenOwners }
            })
          ).data.users;
      });
    };
    fetchTokens();
    // UI Management
    const colors = ['red', 'orange', 'blue', 'purple', 'pink', 'yellow'];
    const modOriginalOwners = computed(() =>
      originalOwners.value.map(owner => ({
        ...owner,
        color: colors[Math.floor(Math.random() * (colors.length - 1))]
      }))
    );
    // Create Sponsorship Link Management
    const { functions } = useDbGetters(['functions']);
    const { collection } = useDbGetters(['collection']);
    const autoMonitor = ref(true);
    const oneTimeUse = ref(true);
    const sponsorId = ref('');
    const sponsorQuantity = ref(0);
    const sponsorLinksTableItems = ref([]);
    const sponsorshipLink = ref('');
    const sponsorWelcomeMessage = ref('');
    const shareLinkDialog = ref(false);
    const updateSponsorQuantity = () => {
      sponsorQuantity.value = tokens.value.filter(
        token => token.owner_id === sponsorId.value
      ).length;
    };
    const formatSponsorLink = (code: string) => `https://www.pilotcity.com/sponsor/${code}`;
    const fetchSponsorLinks = () => {
      collection.value!('SponsorLinks')
        .find({
          createdBy: new ObjectID(id.value!)
        })
        .then(links => {
          sponsorLinksTableItems.value = links;
        });
    };
    fetchSponsorLinks();
    const sponsorName = item =>
      item.sponsorName ? item.sponsorName : `${item.firstName} ${item.lastName}`;
    const createSponsorshipLink = async () => {
      const sponsorTokens = tokens.value.filter(
        (token: Token) => token.owner_id === sponsorId.value
      );
      const tokenIds = sponsorTokens.map(token => token._id).slice(0, sponsorQuantity.value);
      const sponsor = originalOwners.value.filter(owner => owner._id === sponsorId.value)[0];
      const {
        data: { shareCode }
      } = await functions.value.callFunction(
        'createSponsorLink',
        id.value,
        sponsorQuantity.value,
        autoMonitor.value,
        tokenIds
      );
      sponsorshipLink.value = formatSponsorLink(shareCode);
      sponsorWelcomeMessage.value = `Want to build employer projects to win internships? ${sponsorName(
        sponsor
      )} sponsors you to participate in the PilotCity flagship program. Browse employers using the following sponsorship link & code: ${
        sponsorshipLink.value
      }. Welcome aboard! We're rooting for you.`;
      shareLinkDialog.value = true;
      sponsorId.value = '';
      sponsorQuantity.value = 0;
      fetchTokens();
      fetchSponsorLinks();
    };
    const revokeToken = (code: string) => {
      functions.value.callFunction('revokeLink', id.value, code).then(() => {
        fetchTokens();
        fetchSponsorLinks();
      });
    };
    const copy = str => {
      navigator.clipboard.writeText(str);
    };
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
    const errors = '';
    return {
      sponsorshipLink,
      sponsorWelcomeMessage,
      dialog6: false,
      shareLinkDialog,
      sponsorQuantity,
      estimatedNumber: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      transferState,
      sponsorState,
      tokens,
      originalOwners,
      autoMonitor,
      oneTimeUse,
      copy,
      sponsorName,
      createSponsorshipLink,
      sponsorLinksTableItems,
      updateSponsorQuantity,
      showCopiedLinkTooltip: ref(false),
      showCopiedMessageTooltip: ref(false),
      revokeToken,
      modOriginalOwners,
      transferEmail,
      processTransfer,
      transferQuantity,
      user: useDbState(['user']).user,
      sponsorId,
      sponsorNameExamples: ['Arroyo High School', 'San Lorenzo Unified School District'],
      errors
    };
  }
};
</script>

<style lang="scss">
.balance {
  &__center-stage {
    // width: 25%;
  }
  &__welcome-message {
    // width: 400px;
  }
  &__estimated-number {
    width: 175px;
  }
  &__details-name {
    font-family: Raleway;
    font-size: 25px;
    width: 550px;
  }

  &__token-amount {
    font-family: Raleway;
    font-size: 25px;
    width: 150px;
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

    color: #000000;
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

  &__email-font {
    font-family: Raleway;
    font-size: 25px;
    width: 600px;
  }

  &__transfer-button {
    margin: 10px;
  }
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 57px;
}
</style>
