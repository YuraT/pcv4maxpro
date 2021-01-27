<template>
  <v-main>
    <Navbar :user="getUser" :loading="loading"></Navbar>
    <router-view />
  </v-main>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import { useToolGetters, useAuthGetters } from '@/store';

export default {
  components: {
    Navbar
  },
  setup() {
    const { getLinearLoading: loading } = useToolGetters(['getLinearLoading']);
    return {
      getUser: useAuthGetters(['getUser']).getUser,
      loading
    };
  }
};
</script>
