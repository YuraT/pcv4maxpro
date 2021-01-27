<template>
  <validation-observer :class="computedClasses" slim class="setup-profile__content">
    <v-slide-x-transition hide-on-leave>
      <general-id
        v-if="step < 1 && (selectedTypes === undefined || selectedTypes.length == 0)"
        v-model="selectedTypes"
        style="margin-top: 70px"
        @input="selectedTypes.length == step ? finish() : step++"
      ></general-id>
    </v-slide-x-transition>

    <v-slide-x-transition>
      <v-stepper v-if="step > 0" v-model="step">
        <v-stepper-header>
          <template v-for="(type, index) in selectedTypes">
            <v-stepper-step
              :key="'step' + index"
              :step="index + 1"
              :complete="step - 1 > index"
              :editable="step - 1 > index"
              >{{ `${type}` }}
            </v-stepper-step>
            <v-divider :key="'divider' + index" />
          </template>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content :step="step">
            <v-slide-x-transition hide-on-leave>
              <component :is="idSections[step - 1]" @input="step++" />
            </v-slide-x-transition>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-slide-x-transition>
  </validation-observer>
</template>

<script lang="ts">
import { ref, Ref, computed, watch } from '@vue/composition-api';
import { breakpoints } from '@/utils';
import { useAuthGetters } from '@/store';
import apolloProvider from '@/vue-apollo';
import {
  UserQueryInput,
  User,
  EmployerPortfolio,
  ParentPortfolio,
  SchoolPortfolio,
  StudentPortfolio,
  TeacherPortfolio
} from '@/generated/graphql';
import gql from 'graphql-tag';
import {
  GeneralID,
  EmployerID,
  StudentID,
  SchoolID,
  ParentID,
  TeacherID
} from './views/CitizenID/views';

export default {
  name: 'SetupPortfolio',
  components: {
    'general-id': GeneralID,
    'employer-id': EmployerID,
    'student-id': StudentID,
    'teacher-id': TeacherID,
    'school-id': SchoolID,
    'parent-id': ParentID
  },
  async beforeRouteEnter(to, from, next) {
    const { getId } = useAuthGetters(['getId']);
    await apolloProvider.defaultClient
      .query<{ user: User }>({
        query: gql`
          query setupRouteUser($query: UserQueryInput!) {
            user(query: $query) {
              userTypes
            }
          }
        `,
        variables: {
          query: { _id: getId.value } as UserQueryInput
        }
      })
      .then(({ data: { user } }) => {
        if (user)
          apolloProvider.defaultClient
            .query<{
              employerPortfolio: EmployerPortfolio;
              parentPortfolio: ParentPortfolio;
              schoolPortfolio: SchoolPortfolio;
              studentPortfolio: StudentPortfolio;
              teacherPortfolio: TeacherPortfolio;
            }>({
              query: gql`
                query allPortfolios($id: ObjectId!) {
                  Employer: employerPortfolio(query: { _id: $id }) {
                    _id
                  }
                  Parent: parentPortfolio(query: { _id: $id }) {
                    _id
                  }
                  School: schoolPortfolio(query: { _id: $id }) {
                    _id
                  }
                  Student: studentPortfolio(query: { _id: $id }) {
                    _id
                  }
                  Teacher: teacherPortfolio(query: { _id: $id }) {
                    _id
                  }
                }
              `,
              variables: {
                id: getId.value
              }
            })
            .then(({ data }) => {
              if (user.userTypes?.every(type => data[type!])) {
                console.log('working');
                next({
                  name: 'portfolio'
                });
              } else next();
            });
      });
    next(() => {});
  },
  setup(_props, ctx) {
    // stepper setup
    const step = ref(0);
    // component switcher
    const selectedTypes: Ref<string[]> = ref([]);
    const idSections = computed(() => selectedTypes.value.map(type => `${type.toLowerCase()}-id`));
    // Size Breakpoint
    const computedClasses = computed(() =>
      breakpoints[ctx.root.$vuetify.breakpoint.name] > breakpoints.md
        ? ['profile__container', 'pc-container']
        : []
    );
    // eslint-disable-next-line no-shadow
    watch(step, step => {
      if (step > selectedTypes.value.length) ctx.root.$router.push({ name: 'portfolio' });
    });
    return { step, selectedTypes, idSections, computedClasses };
  }
};
</script>

<style lang="scss">
.setup-profile {
  &__title {
    font-family: Raleway;
    font-weight: 800;
    color: black;
    font-size: 25px;
  }
  &__wrapper {
    width: 35%;
    justify-content: center;
  }
  &__content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    padding-top: 70px;
    padding-right: 8%;
    padding-left: 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.setup-profile__content {
  .v-stepper {
    border-radius: 0px;
    box-shadow: none;
    &__step {
      padding-left: 0px;
      padding-right: 0px;
      margin-left: 12px;
      margin-right: 12px;
    }
    &__header {
      box-shadow: none;
      justify-content: center;
      flex-direction: row;
      .v-divider {
        margin: 0 -8px;
        &:last-child {
          display: none;
        }
      }
    }
    &__content {
      display: block !important;
    }
  }
}
@media screen and (max-width: 1024px) {
  .my-id__content {
    .v-stepper {
    }
  }
}
@media screen and (max-width: 479px) {
  .setup-profile__timeline {
    margin-top: 25px;
    padding-right: 16%;
  }
  .horizontal.pc-timeline {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    grid-auto-columns: 1fr;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
  }
}
</style>
