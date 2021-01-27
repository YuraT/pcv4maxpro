<template>
  <div>
    <h1>Must be logged in to view this page</h1>
    <h2>You will be directed shortly</h2>
  </div>
</template>
<script lang="ts">
import { useToolActions } from '@/store';
import { onMounted } from '@vue/composition-api';

const { setLinearLoader } = useToolActions(['setLinearLoader']);
export default {
  setup(_props, ctx) {
    onMounted(() => {
      setLinearLoader({
        func: () =>
          new Promise(resolve => {
            setTimeout(() => {
              ctx.root.$router.push({ name: 'login' });
              resolve();
            }, 2000);
          })
      });
    });
    return {};
  }
};
</script>
