<template>
  <div>
    <div class="my-settings__title">Notifications</div>
    <v-checkbox label="Turn on email notifications"></v-checkbox>
    <v-checkbox label="Get email updates and announcements"></v-checkbox>
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

export default {
  name: 'Settings',
  setup() {
    const idItems = ref([
      { title: 'General', icon: 'mdi-key' },
      { title: 'Notifications', icon: 'mdi-bell' },
      { title: 'Programs', icon: 'mdi-telegram' },
      { title: 'Delete Account', icon: 'mdi-delete', color: 'red' }
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
