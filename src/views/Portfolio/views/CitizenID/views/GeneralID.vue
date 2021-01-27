<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <Loading ref="loader" v-slot="{ loading }" class="my-id__content" :callback="processQuery">
      <!-- <div v-if="loading" class="my-id__wrapper">
        <b>
          <v-skeleton-loader class="mb-3" type="card-heading" />
          <v-skeleton-loader type="list-item" />
          <v-skeleton-loader type="list-item" />
          <v-skeleton-loader type="list-item-three-line" />
        </b>
      </div> -->
      <div class="my-id__wrapper">
        <v-skeleton-loader
          :loading="loading"
          type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
        >
          <div class="my-id__title mb-3">General</div>

          <validation-provider v-slot="{ errors }" slim rules="required">
            <v-text-field
              v-model="firstName"
              :error-messages="errors"
              label="First Name"
              outlined
            ></v-text-field>
          </validation-provider>

          <validation-provider v-slot="{ errors }" slim rules="required">
            <v-text-field
              v-model="lastName"
              :error-messages="errors"
              label="Last Name"
              outlined
            ></v-text-field>
          </validation-provider>

          <validation-provider v-slot="{ errors }" slim rules="required">
            <v-text-field
              v-model="phoneNumber"
              v-mask="'(###) ###-####'"
              :error-messages="errors"
              label="Mobile Phone Number"
              outlined
            ></v-text-field>
          </validation-provider>

          <validation-provider v-slot="{ errors }" slim rules="required">
            <v-select
              v-model="userTypes"
              :error-messages="errors"
              :items="AVAILABLE_IDS"
              chips
              label="Citizen Type"
              multiple
              outlined
            ></v-select>
          </validation-provider>
        </v-skeleton-loader>

        <Loading v-slot="{ loading: saving, process: save }" :callback="save">
          <v-btn
            :disabled="invalid"
            :loading="saving"
            :dark="!invalid"
            large
            depressed
            @click="save"
            >Save</v-btn
          >
        </Loading>
      </div>
    </Loading>
  </ValidationObserver>
</template>
<script lang="ts">
import { Ref, reactive, ref, toRefs, onMounted } from '@vue/composition-api';
import { useAuthGetters, useDbActions } from '@/store';
import { PropType } from 'vue';
import Loading from '@/components/Loading.vue';
import { GetterTypes } from '@/store/modules/auth/getters';
// import { ObjectId } from 'bson';
import { ActionTypes } from '@/store/modules/db/actions';
import gql from 'graphql-tag';
import { User } from '@/generated/graphql';
import { CITIZEN_TYPES } from '../../../const';

export default {
  name: 'GeneralID',
  components: {
    Loading
  },
  props: {
    value: {
      type: Array as PropType<TypeItem[]>,
      default: () => []
    }
  },
  setup(
    props,
    {
      emit,
      root: {
        $apolloProvider: {
          defaultClient: { query }
        }
      }
    }
  ) {
    const { getObjectId } = useAuthGetters([GetterTypes.getObjectId]);
    // Page Setup
    const AVAILABLE_IDS = ref(CITIZEN_TYPES);
    const user = reactive({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      userTypes: []
    });
    const loader: Ref<ReturnType<typeof Loading['setup']> | null> = ref(null);
    // GraphQL Query
    const GENERALIDQUERY = gql`
      query thisGeneralUser($id: ObjectId!) {
        user(query: { _id: $id }) {
          firstName
          lastName
          phoneNumber
          userTypes
        }
      }
    `;
    // Invoke Query
    function processQuery() {
      return query<{ user: User }>({
        query: GENERALIDQUERY,
        variables: { id: getObjectId.value }
      }).then(({ data: { user: userRes } }) => {
        // Set Query result when loaded
        Object.keys(user).forEach(key => {
          if (userRes && userRes[key]) user[key] = userRes[key];
        });
      });
    }

    // Upload Functionality
    const { update } = useDbActions([ActionTypes.update]);
    async function save() {
      await update({
        collection: 'User',
        payload: {
          _id: getObjectId.value,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          userTypes: user.userTypes
        } as User,
        filter: { _id: getObjectId.value },
        options: { upsert: true }
      });
      emit('input', user.userTypes);
    }
    onMounted(() => {
      loader.value!.process();
    });
    return {
      AVAILABLE_IDS,
      ...toRefs(user),
      save,
      processQuery,
      loader
    };
  }
};
</script>
