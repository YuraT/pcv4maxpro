<template>
  <div class="list-view__entire-body">
    <IndexTable v-slot="{ indexedItems, indexHandler }" :items="items">
      <v-data-table
        :headers="header"
        :items="indexedItems"
        sort-by="index"
        item-key="id"
        :show-select="false"
        :disable-pagination="true"
        :hide-default-footer="true"
        class="pagetable"
        @current-items="indexHandler"
      >
        <template v-slot:body="{ items }">
          <draggable :list="items" tag="tbody">
            <tr v-for="(user, index) in items" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ user.first }}</td>
              <td>{{ user.last }}</td>
              <td>{{ user.organization }}</td>
            </tr>
          </draggable>
        </template>
      </v-data-table>
    </IndexTable>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import IndexTable from '@/components/IndexTable.vue';
import draggable from 'vuedraggable';
import { items, HEADER } from './const';

export default {
  name: 'ListView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    IndexTable,
    draggable
  },
  computed: {
    dragOptions() {
      return {
        animation: 150,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag'
      };
    }
  },

  setup() {
    return { header: ref(HEADER), items: ref(items) };
  }
};
</script>

<style lang="scss">
.list-view__entire-body {
  margin-right: 56px;
}
</style>
