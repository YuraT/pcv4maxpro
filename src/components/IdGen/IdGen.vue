<script lang="ts">
import { PropType } from 'vue';
import { generateId } from '.';

export default {
  props: {
    value: {
      type: Array as PropType<Record<any, any>>,
      required: true
    }
  },
  setup(props, ctx) {
    return () =>
      ctx.slots!.default({
        keyedCollection: generateId(props.value as Record<any, any>[], 'simple')
      })[0];
  }
};
</script>
