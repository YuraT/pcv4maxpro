<template>
  <div class="select__entire-body">
    <div class="select__stepper">
      <v-stepper v-model="currentStep">
        <v-stepper-header>
          <v-stepper-step step="1" non-linear> Select </v-stepper-step>

          <v-divider></v-divider>
          <v-stepper-step step="2" non-linear> Setup </v-stepper-step>

          <v-divider></v-divider>
          <v-stepper-step step="3" non-linear> Publish </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <Select></Select>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import Select from './views/Select';
import SetupProgram from './views/SetupProgram';

export default defineComponent({
  name: 'CreateProgram',
  components: {
    Select,
    SetupProgram
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
