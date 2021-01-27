<template>
  <v-main>
    <router-view />
  </v-main>
</template>

<script lang="ts">
import { useAuthGetters } from '@/store';

export default {
  setup() {
    return {
      getUser: useAuthGetters(['getUser']).getUser
    };
  }
};
</script>
