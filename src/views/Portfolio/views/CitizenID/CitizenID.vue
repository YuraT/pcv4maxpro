<template>
  <div class="my-id__container">
    <component :is="expComponent ? expComponent : getComponent" />

    <!-- <v-row class="mt-12" justify="center">
      <v-btn class="red darken-1" dark depressed x-large @click.stop="dialog = true"
        ><v-icon left>mdi-delete</v-icon>Delete ID</v-btn
      >
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Are you sure you want to delete this ID?</v-card-title>

          <v-card-text>
            This ID, programs associated and all historic data will be deleted.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="light" text @click="dialog = false">Cancel</v-btn>
            <v-btn color="red darken-1" text @click="dialog = false">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row> -->
  </div>
</template>

<script lang="ts">
import { ref, computed } from '@vue/composition-api';
import { GeneralID, EmployerID, StudentID, SchoolID, ParentID, TeacherID } from './views';

export default {
  name: 'CitizenID',
  components: {
    'general-id': GeneralID,
    'employer-id': EmployerID,
    'student-id': StudentID,
    'teacher-id': TeacherID,
    'school-id': SchoolID,
    'parent-id': ParentID
  },
  props: {
    expComponent: {
      type: String,
      default: ''
    }
  },
  setup() {
    const currentID = ref('General');
    const idItems = ref([
      { title: 'Employer', icon: 'mdi-account' },
      { title: 'Student', icon: 'mdi-account' },
      { title: 'Teacher', icon: 'mdi-account' },
      { title: 'School', icon: 'mdi-account' },
      { title: 'Parent', icon: 'mdi-account' }
    ]);
    const dialog = ref(false);
    const getComponent = computed(() => {
      let ID = `${currentID.value.toLowerCase()} id`;
      ID = ID.split(' ').join('-');
      return ID;
    });
    return { dialog, idItems, getComponent, currentID };
  }
};
</script>

<style lang="scss">
.my-id__content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  padding-right: 12%;
  padding-left: 12%;
  justify-content: center;
}

.my-id__wrapper {
  width: 50%;
  justify-content: center;
  .v-skeleton-loader {
    & > div.v-skeleton-loader__list-item,
    div.v-skeleton-loader__list-item-two-line,
    div.v-skeleton-loader__list-item-three-line {
      padding: 0px;
      height: 86px;
      justify-content: center;
      display: flex;
    }
  }
}

.my-id__title {
  font-family: Raleway;
  font-weight: 800;
  color: black;
  font-size: 25px;
}
.my-id__right-wrapper {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 100%;
}

.my-id__left-wrapper {
  -webkit-box-flex: 0;
  -webkit-flex: 0 314px;
  -ms-flex: 0 314px;
  flex: 0 314px;
  height: 100%;
}

.my-id__container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  max-width: 93.5%;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 4.8%;
  padding-left: 4.8%;
  height: 100%;
  // & .my-id__left-wrapper,
  // .my-id__right-wrapper {
  //   padding: 12px;
  // }
}
.my-id__button--append {
  margin-left: 9px;
  min-height: 56px;
}

@media screen and (max-width: 1024px) {
  .my-id--position {
    display: flex;
    flex-direction: column;
  }
  .my-id__content {
    padding-left: 1%;
    padding-right: 1%;
    width: 100%;
  }
  .my-id__wrapper {
    width: 100%;
    padding-right: 1%;
    padding-left: 1%;
  }
}
</style>
