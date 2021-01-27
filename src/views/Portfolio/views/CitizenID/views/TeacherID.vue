<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <Loading ref="loader" v-slot="{ loading }" class="my-id__content" :callback="processQuery">
      <div class="my-id__wrapper">
        <v-skeleton-loader
          :loading="loading"
          type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
        >
          <div class="my-id__title mb-3">Teacher ID</div>
          <!-- School District -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="schoolDistrict"
              :error-messages="errors"
              label="School District"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- School Name. Google Maps Integration to find school name / district so data coming in across the board is consistent -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="schoolName"
              :error-messages="errors"
              label="School Name"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- School District -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-combobox
              v-model="subjects"
              :items="[]"
              :error-messages="errors"
              chips
              clearable
              outlined
              label="List subject areas you teach"
              multiple
              solo
            >
              <template v-slot:selection="{ attrs, item, select, selected }">
                <v-chip
                  v-bind="attrs"
                  :input-value="selected"
                  close
                  @click="select"
                  @click:close="remove(item)"
                >
                  <span>{{ item }}</span>
                </v-chip>
              </template>
            </v-combobox>
          </validation-provider>

          <!-- Street Address -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="schools.streetAddress"
              :error-messages="errors"
              label="Street Address"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- City -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="schools.city"
              :error-messages="errors"
              label="City"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- State -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="schools.state"
              :error-messages="errors"
              :items="stateOpts"
              label="State"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Zipcode  -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="schools.zipcode"
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
            block
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
import { reactive, toRefs, ref, Ref, onMounted } from '@vue/composition-api';
import { useAuthGetters, useDbActions } from '@/store';
import { ActionTypes } from '@/store/modules/db/actions';
import { GetterTypes } from '@/store/modules/auth/getters';
import gql from 'graphql-tag';
import { TeacherPortfolio } from '@/generated/graphql';
import Loading from '@/components/Loading.vue';
import { STATE } from '../../../const';

export default {
  name: 'TeacherID',
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
    const { getObjectId } = useAuthGetters([GetterTypes.getObjectId]);
    const formOpt = reactive({ stateOpts: STATE });
    const details = reactive({
      schoolDistrict: '',
      schoolName: '',
      subjects: [] as string[],
      schools: {
        streetAddress: '',
        city: '',
        state: '',
        zipcode: ''
      }
    });

    const loader: Ref<ReturnType<typeof Loading['setup']> | null> = ref(null);

    const TEACHERIDQUERY = gql`
      query thisTeacher($id: ObjectId) {
        teacherPortfolio(query: { _id: $id }) {
          schoolDistrict
          schoolName
          subjects
          schools {
            streetAddress
            city
            state
            zipcode
          }
        }
      }
    `;
    function remove(item: string) {
      details.subjects.splice(details.subjects.indexOf(item), 1);
      details.subjects = [...details.subjects];
    }
    onMounted(() => {
      loader.value!.process();
    });

    function processQuery() {
      return query<{ teacherPortfolio: TeacherPortfolio }>({
        query: TEACHERIDQUERY,
        variables: { id: getObjectId.value }
      }).then(({ data: { teacherPortfolio: res } }) => {
        if (res)
          Object.keys(details).forEach(key => {
            if (res[key]) details[key] = res[key];
          });
      });
    }

    const { update } = useDbActions([ActionTypes.update]);

    async function save() {
      await update({
        collection: 'TeacherPortfolio',
        payload: {
          _id: getObjectId.value,
          schoolDistrict: details.schoolDistrict,
          schoolName: details.schoolName,
          subjects: details.subjects,
          schools: details.schools
        } as TeacherPortfolio,
        filter: { _id: getObjectId.value },
        options: { upsert: true }
      });
      emit('input');
    }

    return { save, ...toRefs(details), processQuery, loader, ...toRefs(formOpt), remove };
  }
};
</script>
