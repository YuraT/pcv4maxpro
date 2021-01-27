<template>
  <span>
    <slot :indexedItems="indexedItems" , :indexHandler="indexHandler"></slot>
  </span>
</template>
<script lang="ts">
import { computed } from '@vue/composition-api';
import shortid from 'shortid';

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    interface IndexedItems extends Record<string, any> {
      // its a type defenition
      index: number;
      id: string;
      [x: string]: any;
    }
    function addIndex(headers: Record<string, any>[]): IndexedItems[] {
      const indexedItems: IndexedItems[] = [];
      headers.forEach((item, index) => {
        indexedItems.push({
          ...item,
          id: shortid(),
          index: index + 1
        });
      });
      return indexedItems;
    }
    const indexedItems = computed(() => {
      return addIndex(props.items as Record<string, any>[]);
    });
    function indexHandler(indexedArgs: IndexedItems) {
      indexedArgs.forEach(({ id }, index) => {
        const itemPos = indexedItems.value.findIndex(item => item.id === id);
        indexedItems.value[itemPos].index = index + 1;
      });
    }
    return { indexedItems, indexHandler };
  }
};
</script>
