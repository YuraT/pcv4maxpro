<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <Loading ref="loader" v-slot="{ loading }" class="my-id__content" :callback="processQuery">
      <div class="my-id__wrapper">
        <v-skeleton-loader
          :loading="loading"
          type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
        >
          <div class="my-id__title mb-3">Employer ID</div>

          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="employerName"
              :error-messages="errors"
              label="Company / Organization"
              outlined
            ></v-text-field>
          </validation-provider>

          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="jobTitle"
              :error-messages="errors"
              label="Job Title"
              outlined
            ></v-text-field>
          </validation-provider>

          <validation-provider v-slot="{ errors }" rules="required">
            <v-textarea
              v-model="industry"
              :error-messages="errors"
              label="Describe your industry"
              outlined
              auto-grow
            ></v-textarea>
          </validation-provider>

          <validation-provider v-slot="{ errors }" rules="required">
            <v-textarea
              v-model="primaryProduct"
              :error-messages="errors"
              label="Describe your primary product or service"
              outlined
              auto-grow
            ></v-textarea>
          </validation-provider>

          <!-- Street Address -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="work.streetAddress"
              :error-messages="errors"
              label="Street Address"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- City -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="work.city"
              :error-messages="errors"
              label="City"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- State -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="work.state"
              :error-messages="errors"
              :items="stateOpts"
              label="State"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Zipcode  -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="work.zipcode"
              v-mask="'#####'"
              :error-messages="errors"
              label="Zipcode"
              outlined
              maxlength="5"
            ></v-text-field>
          </validation-provider>
        </v-skeleton-loader>

        <Loading v-slot="{ loading: saving, process: save }" :callback="save">
          <v-btn
            :disabled="invalid"
            :loading="saving"
            :dark="!invalid"
            large
            block
            depressed
            @click="save"
          >
            Save
          </v-btn>
        </Loading>
      </div>
    </Loading>
  </ValidationObserver>
</template>

<script lang="ts">
import { reactive, toRefs, ref, Ref, onMounted } from '@vue/composition-api';
import { useAuthGetters, useDbActions } from '@/store';
import { ActionTypes } from '@/store/modules/db/actions';
import { GetterTypes } from '@/store/modules/auth/getters';
import gql from 'graphql-tag';
import { EmployerPortfolio } from '@/generated/graphql';
import Loading from '@/components/Loading.vue';
import { STATE } from '../../../const';

export default {
  name: 'EmployerID',
  components: {
    Loading
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
    const {
      getObjectId
      // getId: { value: getId }
    } = useAuthGetters([GetterTypes.getObjectId]);
    const formOpt = reactive({
      stateOpts: STATE
    });
    const employer = reactive({
      employerName: '',
      jobTitle: '',
      industry: '',
      primaryProduct: '',
      work: {
        streetAddress: '',
        city: '',
        state: '',
        zipcode: ''
      }
    });

    const loader: Ref<ReturnType<typeof Loading['setup']> | null> = ref(null);

    const EMPLOYERIDQUERY = gql`
      query thisEmployer($id: ObjectId) {
        employerPortfolio(query: { _id: $id }) {
          employerName
          jobTitle
          industry
          primaryProduct
          work {
            streetAddress
            city
            state
            zipcode
          }
        }
      }
    `;

    onMounted(() => {
      loader.value!.process();
    });

    function processQuery() {
      return query<{ employerPortfolio: EmployerPortfolio }>({
        query: EMPLOYERIDQUERY,
        variables: { id: getObjectId.value }
      }).then(({ data: { employerPortfolio: res } }) => {
        if (res)
          Object.keys(employer).forEach(key => {
            if (res[key]) employer[key] = res[key];
          });
      });
    }

    const { update } = useDbActions([ActionTypes.update]);

    async function save() {
      await update({
        collection: 'EmployerPortfolio',
        payload: {
          _id: getObjectId.value,
          employerName: employer.employerName,
          jobTitle: employer.jobTitle,
          industry: employer.industry,
          primaryProduct: employer.primaryProduct,
          work: employer.work
        } as EmployerPortfolio,
        filter: { _id: getObjectId.value },
        options: { upsert: true }
      });
      emit('input');
    }

    return { ...toRefs(employer), save, processQuery, loader, ...toRefs(formOpt) };
  }
};
</script>
