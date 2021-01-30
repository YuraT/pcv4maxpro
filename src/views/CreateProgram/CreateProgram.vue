<template>
  <div class="select__entire-body">
    <Select></Select>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import Select from './views/Select';

export default defineComponent({
  name: 'CreateProgram',
  components: {
    Select
  },
  setup() {
    const stepperData = reactive({
      currentStep: 1
    });
    return {
      ...toRefs(stepperData)
    };
  }
});
</script>
