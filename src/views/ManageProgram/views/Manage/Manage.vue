<template>
  <div class="manage__entire-body">
    <!-- <div class="manage__first-part">
      <Nav></Nav>
    </div> -->
    <div class="manage__second-body">
      <div class="manage__title">Manage Program</div>
      <!-- <manage-filter class="manage__profile-btn"></manage-filter> -->

      <v-row class="manage__order-button">
        <!-- Turn "Grid View" on when user clicks on "List View" -->
        <v-btn class="ma-1" dark rounded small color="grey" depressed @click="gridList = !gridList">
          <v-icon left>mdi-view-grid</v-icon>
          Grid View
        </v-btn>

        <v-btn
          class="ma-1"
          rounded
          small
          color="grey"
          depressed
          outlined
          @click="gridList = !gridList"
        >
          <v-icon left>mdi-format-list-bulleted</v-icon>
          List View
        </v-btn>

        <v-btn class="ma-1" rounded small color="grey" depressed outlined
          ><v-icon left>mdi-drag-variant</v-icon>Edit Order</v-btn
        >
        <!-- Turn "Save Order" on when user clicks on "Edit ORder" -->
        <v-btn class="ma-1" dark rounded small color="green" depressed
          ><v-icon left>mdi-check-bold</v-icon>Save Order</v-btn
        >

        <v-btn class="ma-1 ml-auto" dark outlined rounded small color="grey" depressed
          ><v-icon left>mdi-plus-box-multiple</v-icon>Add Activity</v-btn
        >

        <v-btn class="ma-1" dark rounded small color="grey" outlined depressed
          ><v-icon left>mdi-content-copy</v-icon>Copy to new program</v-btn
        >
      </v-row>

      <div v-if="gridList" class="manage__list--view">
        <ListView />
      </div>

      <div v-else>
        <IndexTable v-slot="{ indexedItems }" :items="items">
          <draggable
            v-model="items"
            class="manage__graph"
            v-bind="dragOptions"
            :list="indexedItems"
            @start="isDragging = true"
            @end="isDragging = false"
          >
            <transition-group
              v-for="{ title, image, index } in indexedItems"
              :key="index"
              type="transition"
              name="bounce"
            >
              <pc-card :key="index" class="list-group-item">
                <template v-slot:title>{{ index }}</template>
                <template v-slot:actions> </template>
                <template v-slot:graph>
                  <v-img :src="image" class="pc-card__image"></v-img>
                </template>
              </pc-card>
            </transition-group>
          </draggable>
        </IndexTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import draggable from 'vuedraggable';
import { ref } from '@vue/composition-api';
import IndexTable from '@/components/IndexTable.vue';
import { PCCard, ListView } from '../../components';
import tableItems from './const';

export default {
  name: 'Manage',
  components: {
    'pc-card': PCCard,
    draggable,
    ListView,
    IndexTable
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
    const gridList = ref(false);
    const listViewcheck = ref(true);
    return { items: ref(tableItems), listViewcheck, gridList };
  }
};
</script>

<style lang="scss">
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0%;
  // border: 1px dashed #404142;
  // this doesnt do anything as of now
}

.sortable-chosen {
  opacity: 20%;
  // border: 1px dashed #404142;
}

.sortable-drag {
  // opacity: 15%;
  // border: 1px dashed #404142;
  // z-index: 1;
  // opacity: 0;
  // opacity: 0;
  // background: #204d61;
}

.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
.v-main__wrap {
  background: white;
  color: black;
}
.manage {
  &__entire-body {
    display: flex;
    height: 100%;
  }

  &__title {
    margin-left: 56px;
    margin-top: 44px;
    font-family: Raleway;
    font-size: 33px;
    font-weight: 800;
  }

  &__profile-btn {
    display: flex;
    margin-top: 28px;
    padding-left: 56px;
  }

  &__order-button {
    margin-left: 56px;
    margin-top: 65px;
  }

  &__pills {
    margin-right: 9px;
    display: flex;
    align-items: center;
    width: 85px;
    border-radius: 25px;
    background: #bdbdbd;

    &.v-chip {
      padding: 0px 0px;
      &.v-size--default {
        height: 20px;
      }
    }

    &--outline {
      width: 85px;
      border-radius: 25px;

      &.theme--light {
        &.v-chip {
          background: white;
          padding: 0px 0px;
          border: 1px dashed #828282;
          &.v-size--default {
            height: 20px;
          }
          &:not(.v-chip--active) {
            background: transparent;
          }
        }
      }
    }
  }

  &__close {
    margin-left: 7.94px;
  }

  &__graph {
    margin-left: 56px;
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-template-rows: repeat(2, 275px);
    grid-column-gap: 17px;
    grid-row-gap: 42px;
  }

  &__list--view {
    width: 100%;
    margin-left: 56px;
  }
}
.pc-card {
  &__entire-body {
    max-width: 350px;
    max-height: 283px;
    &.v-sheet.v-card {
      box-shadow: 0px 0px 0px 0px, 0px 0px 0px 0px, 0px 0px 0px 0px;
      border-radius: 10px;
    }
  }
}

//to swich between the grid for diff width of the screen for 786px

@media only screen and (max-width: 786px) {
  .manage {
    &__graph {
      margin-left: 56px;
      margin-top: 76px;
      display: grid;
      grid-template-columns: repeat(1, 350px);
      grid-template-rows: repeat(2, 250px);
      grid-column-gap: 17px;
      grid-row-gap: 42px;
    }
  }
}
//to swich between the grid for diff width of the screen for min of 786px and max of 1024px

@media only screen and (min-width: 786px) and (max-width: 1024px) {
  .manage {
    &__graph {
      margin-left: 56px;
      margin-top: 76px;
      display: grid;
      grid-template-columns: repeat(2, 350px);
      grid-template-rows: repeat(2, 250px);
      grid-column-gap: 17px;
      grid-row-gap: 42px;
    }
  }
}
</style>
