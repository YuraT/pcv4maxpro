<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <Loading ref="loader" v-slot="{ loading }" class="my-id__content" :callback="processQuery">
      <div class="my-id__wrapper">
        <v-skeleton-loader
          :loading="loading"
          type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
        >
          <div class="my-id__title mb-3">Student ID</div>

          <!-- Grade Level -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="grade"
              :error-messages="errors"
              type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
              :items="gradeLevel"
              label="Grade Level"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Google Maps Integration to find school name / district so data coming in across the board is consistent -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="school.name"
              :error-messages="errors"
              label="School Name"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- School District -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="school.district"
              :error-messages="errors"
              label="School District"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- Birthdate -->

          <v-menu
            ref="menu"
            :value="false"
            transition="scale-transition"
            :close-on-content-click="false"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <validation-provider v-slot="{ errors }" rules="required">
                <v-text-field
                  v-model="date"
                  :error-messages="errors"
                  label="Birthdate"
                  outlined
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </validation-provider>
            </template>
            <v-date-picker
              ref="picker"
              v-model="date"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @input="menu = false"
            ></v-date-picker>
          </v-menu>

          <!-- Supergender -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="gender"
              :items="superGender"
              :error-messages="errors"
              label="Supergender"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Ethnicity & Culture -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="ethnicity"
              :items="ethnicityCulture"
              :error-messages="errors"
              multiple
              label="Ethnicity & Culture"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Guardian Email -->

          <div class="d-flex flex-row my-id--position">
            <validation-provider v-slot="{ errors }" rules="required|email">
              <v-text-field
                v-model="guardian.email"
                :error-messages="errors"
                label="Guardian Email"
                outlined
              >
              </v-text-field>
            </validation-provider>
            <Loading v-slot="{ loading: loadInvite, process }" :callback="sendInvite">
              <v-btn
                class="my-id__button--append"
                depressed
                outlined
                x-large
                :loading="loadInvite"
                @click="process"
                >Invite</v-btn
              >
            </Loading>
          </div>

          <!-- First Name -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="guardian.firstName"
              :error-messages="errors"
              label="Guardian First Name"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- Last Name -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="guardian.lastName"
              :error-messages="errors"
              label="Guardian Last Name"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- Relationship to Guardian -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="guardian.relationship"
              :items="guardianRelationship"
              :error-messages="errors"
              label="Relationship to Guardian"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Home Language -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="home.language"
              :error-messages="errors"
              :items="homeLanguageOpts"
              multiple
              label="Home Language"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Street Address -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="home.streetAddress"
              :error-messages="errors"
              label="Street Address"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- City -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="home.city"
              :error-messages="errors"
              label="City"
              outlined
            ></v-text-field>
          </validation-provider>

          <!-- State -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-select
              v-model="home.state"
              :error-messages="errors"
              :items="stateOpts"
              label="State"
              outlined
            ></v-select>
          </validation-provider>

          <!-- Zipcode  -->
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="home.zipcode"
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
            :disabled="invalid && emailSent"
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
import { Ref, reactive, toRefs, ref, onMounted } from '@vue/composition-api';
// import Loading from '@/components/Loading.vue';
import { useAuthGetters, useDbActions, useDbState } from '@/store';
import gql from 'graphql-tag';
import { ActionTypes } from '@/store/modules/db/actions';
import { GetterTypes } from '@/store/modules/auth/getters';
import { SendReferalInput, StudentPortfolio } from '@/generated/graphql';
import Loading from '@/components/Loading.vue';
import { GRADE_LEVEL, SUPER_GENDER, ETHNICITY, GUARDIAN, HOME_LANG, STATE } from '../../../const';

export default {
  name: 'StudentID',
  components: {
    Loading
  },
  setup(
    props,
    {
      emit,
      root: {
        $apolloProvider: {
          defaultClient: { query, mutate }
        }
      }
    }
  ) {
    const { getObjectId } = useAuthGetters([GetterTypes.getObjectId]);

    const formOpt = reactive({
      gradeLevel: GRADE_LEVEL,
      superGender: SUPER_GENDER,
      ethnicityCulture: ETHNICITY,
      guardianRelationship: GUARDIAN,
      homeLanguageOpts: HOME_LANG,
      stateOpts: STATE
    });
    // Interactions
    const menu = ref(false);
    // to be labeled
    const responses = reactive({
      school: {
        name: '',
        district: ''
      },
      guardian: {
        email: '',
        relationship: '',
        firstName: '',
        lastName: ''
      },
      home: {
        streetAddress: '',
        language: [],
        city: '',
        state: '',
        zipcode: ''
      },
      date: '',
      ethnicity: [],
      gender: '',
      grade: '',
      invited: false
    });

    const loader: Ref<ReturnType<typeof Loading['setup']> | null> = ref(null);
    const emailSent = ref(false);
    const STUDENTIDQUERY = gql`
      query thisStudent($id: ObjectId) {
        studentPortfolio(query: { _id: $id }) {
          school {
            name
            district
          }
          guardian {
            email
            relationship
            firstName
            lastName
          }
          home {
            streetAddress
            language
            city
            state
            zipcode
          }
          date
          ethnicity
          gender
          grade
          invited
        }
      }
    `;
    function processQuery() {
      return query<{ studentPortfolio: StudentPortfolio }>({
        query: STUDENTIDQUERY,
        variables: { id: getObjectId.value }
      }).then(({ data: { studentPortfolio: res } }) => {
        if (res)
          Object.keys(responses).forEach(key => {
            if (res[key]) responses[key] = res[key];
          });
      });
    }
    const { user } = useDbState(['user']);
    function sendInvite() {
      return mutate({
        mutation: gql`
          mutation sendGuardianRefferal($email: String!, $id: ObjectId!, $name: String!) {
            sendRefferal(input: { email: $email, name: $name, id: $id }) {
              status
            }
          }
        `,
        variables: {
          email: responses.guardian.email,
          id: getObjectId.value,
          name: `${user.value!.firstName} ${user.value!.lastName}`
        } as SendReferalInput
      }).then(() => {
        emailSent.value = true;
      });
    }
    const { update } = useDbActions([ActionTypes.update]);
    async function save() {
      await update({
        collection: 'StudentPortfolio',
        payload: {
          _id: getObjectId.value,
          school: responses.school,
          guardian: responses.guardian,
          home: responses.home,
          date: responses.date,
          ethnicity: responses.ethnicity,
          gender: responses.gender,
          grade: responses.grade,
          invited: responses.invited
        } as StudentPortfolio,
        filter: { _id: getObjectId.value },
        options: { upsert: true }
      });
      emit('input');
    }
    onMounted(() => {
      loader.value!.process();
    });

    return {
      ...toRefs(formOpt),
      ...toRefs(responses),
      menu,
      emit,
      save,
      processQuery,
      loader,
      sendInvite,
      emailSent
    };
  }
};
</script>
