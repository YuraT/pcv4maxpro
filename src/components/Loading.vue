<template>
  <div>
    <slot :loading="loading" :process="process"></slot>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from '@vue/composition-api';
import { useToolActions } from '@/store';

export default defineComponent({
  props: {
    callback: {
      type: Function,
      required: true
    },
    linearLoader: {
      type: Boolean
    },
    processNow: {
      default: false
    }
  },
  setup(props) {
    const { setLinearLoader } = useToolActions(['setLinearLoader']);

    const loading = ref(false);
    const process =
      // setLinearLoader({
      async () => {
        loading.value = true;
        try {
          await (props.callback as Function)();
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
        loading.value = false;
      };
    // });
    onMounted(() => {
      if (props.processNow) {
        process();
      }
    });
    return {
      loading,
      process: props.linearLoader
        ? () =>
            setLinearLoader({
              func: process
            })
        : process
    };
  }
});
</script>
