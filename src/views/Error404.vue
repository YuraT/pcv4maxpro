<template>
  <div class="mt-6 d-flex align-center flex-column">
    <h1>[404] You look lost!</h1>
    <v-btn class="mt-12" large dark depressed @click="pushHome">Click to come home</v-btn>
  </div>
</template>
<script lang="ts">
export default {
  setup(props, { root: { $router } }) {
    const pushHome = () => {
      $router.push('portfolio');
    };
    return { pushHome };
  }
};
</script>
