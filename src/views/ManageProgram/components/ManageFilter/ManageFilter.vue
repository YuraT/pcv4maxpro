<template>
  <div>
    <template>
      <v-dialog v-model="dialog" scrollable max-width="300px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-1" color="grey" v-bind="attrs" rounded outlined v-on="on">
            <v-icon left>mdi-filter-variant</v-icon> Filter
          </v-btn>
        </template>

        <v-card>
          <v-card-title>Select Filters</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px">
            <v-radio-group v-model="selectedFilters" column>
              <v-radio v-for="{ label } in filterChips" :key="label" :label="label"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>

    <!-- Filtered Chips in the form of a button -->
    <v-btn
      v-for="{ label, color } in filterChips"
      :key="label"
      class="ma-1"
      :color="color"
      rounded
      outlined
      ><v-icon left>mdi-close</v-icon>{{ label }}</v-btn
    >
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { computed, ref } from '@vue/composition-api';
import filterChips from './const';

export default {
  props: {
    value: {
      type: Array as PropType<string[]>,
      default: () => []
    }
  },
  setup(props, { emit }) {
    // state
    const dialog = ref(false);
    const selectedFilters = computed({
      get: () => props.value,
      set: newVal => {
        emit('input', newVal);
      }
    });
    return {
      dialog,
      selectedFilters,
      filterChips
    };
  }
};
</script>
