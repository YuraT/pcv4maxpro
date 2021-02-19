<template>
  <div class="programmanage__main-body">
    <div class="programmanage__nav">
      <Nav v-model="currentID" />
    </div>
    <div class="programmanage__Manage">
      <component :is="getComponent" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from '@vue/composition-api';
import Nav from './components/Nav/Nav.vue';
import { Manage, EditProgram, Participants, ManageStakeholder } from './views';

export default defineComponent({
  name: 'ProgramManage',
  components: {
    Nav,
    'manage-id': Manage,
    'detail-id': EditProgram,
    // 'setup-id': Participants,
    'participants-id': Participants,
    'stakeholders-id': ManageStakeholder
  },
  setup() {
    const currentID = ref('manage');
    const getComponent = computed(() => {
      let ID = `${currentID.value.toLowerCase()} id`;
      ID = ID.split(' ').join('-');
      return ID;
    });

    return { getComponent, currentID };
  }
});
</script>

<style lang="scss">
.programmanage {
  &__main-body {
    display: flex;
    height: 100%;
  }
  &__Manage {
    width: 100%;
  }
}
</style>
