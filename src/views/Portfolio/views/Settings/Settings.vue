<template>
  <div class="my-settings__container">
    <div class="my-settings__wrapper-left">
      <v-navigation-drawer floating tag="aside" :permanent="true">
        <v-list class="py-0">
          <v-list-item
            v-for="item in idItems"
            :key="item.title"
            link
            @click="currentID = item.title"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <div class="my-settings__content">
      <!-- General -->
      <Name />

      <v-divider class="my-settings__divider"></v-divider>

      <!-- <Password /> -->

      <!-- <v-divider class="my-settings__divider"></v-divider>
      <Email />
      <v-divider class="my-settings__divider"></v-divider> -->
      <!-- Notifications -->
      <!-- <Notifications /> -->
      <!-- <v-divider class="my-settings__divider"></v-divider> -->
      <!-- Programs -->
      <!-- <Program /> -->
      <!-- Delete Account -->
      <!-- <Delete /> -->
    </div>
  </div>
</template>

<style lang="scss">
.my-settings {
  &__container {
    margin-top: 75px;
    display: flex;
    flex-direction: row;
    padding-left: 12%;
    padding-right: 12%;
  }
  &__wrapper {
    &-right {
      flex-grow: 1;
      display: flex;
      justify-content: left;
      padding-left: 50px;
    }
  }

  &__content {
    width: 70%;
  }
  &__title {
    font-family: Raleway;
    font-size: 30px;
    color: #000000;
    font-weight: 800;
    padding-bottom: 50px;
  }

  &__subtitle {
    font-family: Raleway;
    font-size: 22px;
    color: #000000;
    font-weight: 700;
    margin-bottom: 25px;
  }

  &__divider {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  &__save {
    margin-top: 30px;
  }
}
</style>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { Name } from './Views';

export default {
  name: 'Settings',
  components: {
    // Delete,
    Name
    // Notifications,
    // Password
    // Program
  },
  setup() {
    const idItems = ref([
      { title: 'General', icon: 'mdi-key' }
      // { title: 'Notifications', icon: 'mdi-bell' },
      // { title: 'Programs', icon: 'mdi-telegram' },
      // { title: 'Delete Account', icon: 'mdi-delete', color: 'red' }
    ]);
    return { idItems };
  },
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Program 1',
        children: [{ id: 2, name: 'Date joined: September 1st, 2020' }]
      },
      {
        id: 5,
        name: 'Program 2',
        children: [{ id: 2, name: 'Date joined: September 1st, 2020' }]
      },
      {
        id: 15,
        name: 'Program 3',
        children: [{ id: 2, name: 'Date joined: September 1st, 2020' }]
      },
      {
        id: 19,
        name: 'Program 4',
        children: [{ id: 2, name: 'Date joined: September 1st, 2020' }]
      }
    ]
  })
};
</script>
