<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <Loading ref="loader" v-slow="{ loading }" :callback="processQuery">
      <div class="refer__container">
        <profile :size="75"></profile>
        <div class="refer__title-main">Invite friends to join the program</div>

        <div class="refer__title-main-citizens">
          <v-btn
            center
            rounded
            depressed
            dark
            x-small
            color="green"
            class="landing__hero-citizenchips-group1"
            >Students</v-btn
          >

          <v-btn
            center
            rounded
            depressed
            dark
            x-small
            color="purple"
            class="landing__hero-citizenchips-group"
            >Employers</v-btn
          >

          <v-btn
            center
            rounded
            depressed
            dark
            x-small
            color="pink"
            class="landing__hero-citizenchips-group"
            >Teachers</v-btn
          >

          <v-btn
            center
            rounded
            depressed
            dark
            x-small
            color="blue"
            class="landing__hero-citizenchips-group"
            >Schools</v-btn
          >

          <v-btn
            center
            rounded
            depressed
            dark
            x-small
            color="yellow"
            class="landing__hero-citizenchips-group"
            >Parents</v-btn
          >

          <v-btn
            center
            rounded
            depressed
            dark
            x-small
            color="red"
            class="landing__hero-citizenchips-group"
            >Sponsors</v-btn
          >
        </div>

        <div class="refer__body1">
          <v-skeleton-loader :loading="loading" type="heading, list-item, list-item, list-item">
            <validation-provider v-slot="{ errors }" rules="required">
              <v-text-field
                v-model="email"
                :error-messages="errors"
                class="refer__body-email"
                label="Email"
                placeholder="friend@email.com"
                outlined
                height="50px"
                rounded
              >
              </v-text-field>
            </validation-provider>
          </v-skeleton-loader>
          <Loading v-slot="{ loading: loadInvite, process }" :callback="processTransfer">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :disabled="invalid"
                  :dark="!invalid"
                  class="refer__body-email-button"
                  depressed
                  rounded
                  :loading="loadInvite"
                  x-large
                  v-bind="attrs"
                  @click="process"
                  v-on="on"
                >
                  <v-icon left>mdi-telegram</v-icon>Send</v-btn
                >
              </template>
              <v-card class="refer__dialog">
                <v-icon color="green" x-large>mdi-rocket-outline</v-icon>
                <v-card-title class="refer__dialog-title"> You Invite Has Been Sent</v-card-title>
                <v-btn
                  class="refer__dialog-button"
                  rounded
                  outlined
                  large
                  color="primary lighten-3"
                  @click="dialog = false"
                  >OK</v-btn
                >
              </v-card>
            </v-dialog>
          </Loading>
        </div>

        <!-- <div class="refer__body2">
        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field
            v-model="phoneNumber"
            :error-messages="errors"
            class="refer__body-email"
            label="Mobile phone number"
            placeholder="(555) 555-5555"
            outlined
            height="50px"
            rounded
          ></v-text-field>
        </validation-provider>

        <v-btn
          :disabled="invalid"
          :dark="!invalid"
          class="refer__body-email-button"
          depressed
          rounded
          x-large
        >
          <v-icon left>mdi-telegram</v-icon>Text
        </v-btn>
      </div> -->

        <div class="refer__manage1">
          <v-btn small class="refer__manage1-buttons" depressed dark color="grey3"
            ><v-icon left>mdi-email-outline</v-icon>All Invites</v-btn
          >
        </div>

        <!-- <v-btn small class="refer__manage1-buttons" depressed color="grey" outlined
          ><v-icon left>mdi-clock-time-two-outline</v-icon>Pending</v-btn
        >
          <v-icon left>mdi-clock-time-two-outline</v-icon>Pending
        </v-btn>

        <v-btn
          small
          class="refer__manage1-buttons"
          depressed
          color="grey"
          outlined
          @click="sortByAccepted()"
          ><v-icon left>mdi-emoticon-excited-outline</v-icon>Accepted</v-btn
        > -->

        <div class="refer__all_invite">
          <AllInvites />
        </div>
      </div>
    </Loading>
  </ValidationObserver>
</template>

<script lang="ts">
import { ref, Ref, defineComponent, onMounted } from '@vue/composition-api';
import { useAuthGetters, useDbState } from '@/store';
import gql from 'graphql-tag';
import { SendReferalInput, Transaction } from '@/generated/graphql';
import { GetterTypes } from '@/store/modules/auth/getters';
import Profile from '@/components/Profile.vue';
import Loading from '@/components/Loading.vue';
import { AllInvites } from '../../components';

const {
  getObjectId: { value: getObjectId }
} = useAuthGetters([GetterTypes.getObjectId]);

export default defineComponent({
  name: 'Referral',
  components: { AllInvites, Profile, Loading },
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
    const dialog = ref(false);
    const loader: Ref<typeof Loading | null> = ref(null);
    const referral: Ref<{ email: string; timestamp: Date }[]> = ref([]);
    const email = ref('');
    const INVITEQUERY = gql`
      query thisInvite($id: ObjectId) {
        transaction(query: { _id: $id }) {
          referral {
            sentTo
            timestamp
          }
        }
      }
    `;

    function processQuery() {
      return query<{ transaction: Transaction }>({
        query: INVITEQUERY,
        variables: { id: getObjectId }
      }).then(({ data: { transaction } }) => {
        if (transaction && transaction.referral)
          referral.value = transaction.referral.map(item => ({
            email: item!.sentTo!,
            timestamp: item!.timestamp!
          }));
      });
    }

    const processTransfer = async () => {
      console.log(
        await mutate({
          mutation: gql`
            mutation sendInvite($input: SendReferalInput!) {
              sendRefferal(input: $input) {
                status
              }
            }
          `,
          variables: {
            input: {
              id: getObjectId,
              email: email.value,
              name: useDbState(['user']).user.value!.firstName
            } as SendReferalInput
          }
        })
      );
    };
    onMounted(async () => {
      await loader.value?.data?.process();
    });
    return { referral, processTransfer, processQuery, email, loader, dialog };
  }
});
</script>

<style lang="scss">
.refer {
  &__container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title-main {
    font-family: Raleway;
    font-size: 32px;
    font-weight: 800;
    margin-top: 15px;
  }

  &__title-main-citizens {
    margin-top: 15px;
    margin-bottom: 30px;
  }

  &__title-secondary {
    font-family: Raleway;
    font-size: 25px;
    font-weight: 800;
  }

  &__title-tertiary {
    font-family: Raleway;
    font-size: 25px;
    font-weight: 800;
    color: #dedede;
  }

  &__body1 {
    margin-top: 50px;
    // margin-bottom: 12px;
    flex-direction: row;
    display: flex;
  }

  &__body2 {
    margin-top: 30px;
    margin-bottom: 25px;
    flex-direction: row;
    display: flex;
  }

  &__body-email {
    font-size: 20px;
    margin: 20px;
    width: 100%;
  }

  &__body-email-button {
    margin-left: 20px;
    margin-right: 20px;
  }

  &__manage1 {
    margin-top: 50px;
    margin-bottom: 25px;
  }

  &__manage1-buttons {
    margin-left: 10px;
    margin-right: 10px;
  }

  &__divider {
    width: 100%;
    margin-bottom: 50px;
  }

  &__all_invite {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
  &__dialog {
    text-align: center;
    padding: 25px;
  }

  &__dialog-title {
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  &__dialog-button {
    margin: 20px;
  }
}
</style>
