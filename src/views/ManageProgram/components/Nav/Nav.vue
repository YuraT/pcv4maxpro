<template>
  <div class="manage-program__entire-body">
    <div class="manage-program__top-part">
      <div
        class="manage-program__top-line"
        :style="{ 'background-color': `var(--v-${activeTab.color}-base)` }"
      ></div>
    </div>
    <div class="manage-program__title">Program name</div>

    <div class="manage-program__date text-caption">
      <v-chip
        outlined
        color="white"
        small
        text-color="white"
        class="manage-program__start-date font-weight-black"
      >
        {{ startDate }}
      </v-chip>

      <div class="manage-program__dashed-line"><hr /></div>

      <v-chip
        outlined
        color="white"
        small
        text-color="white"
        class="manage-program__end-date font-weight-black"
      >
        {{ endDate }}
      </v-chip>
    </div>
    <!-- <v-btn class="manage-program__publish-button" small depressed outlined dark
      >Setup Incomplete</v-btn
    > -->
    <div class="manage-program__body">
      <v-list-item-group class="manage-program__navigation" width="100%" permanent color="accent">
        <div v-for="item in items" :key="item.title">
          <hr />
          <v-list-item
            link
            :ripple="false"
            :active-class="`${item.color}`"
            @click="
              compId = item.title;
              setActive(item);
            "
          >
            <v-list-item-content class="manage-program__items text-h5 font-weight-bold">
              <v-list-item-title>
                <div class="manage-program__titles secondary--text">{{ item.title }}</div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <hr />
        <v-btn class="manage-program__publish-button" rounded depressed dark color="blue" large
          >Publish</v-btn
        >
      </v-list-item-group>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from '@vue/composition-api';
import items from './const';

export default defineComponent({
  name: 'Nav',
  props: {
    startDate: {
      type: String,
      default: 'DAY, MON 1'
    },
    endDate: {
      type: String,
      default: 'DAY, MON 1'
    },
    value: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const activeTab = ref(items.value[0]);

    const compId = computed({
      get: () => props.value,
      set: newVal => {
        emit('input', newVal);
      }
    });
    function setActive(item) {
      activeTab.value = item;
    }

    return {
      items: ref(items),
      activeTab,
      compId,
      setActive
    };
  }
});
</script>

<style lang="scss">
.manage-program {
  &__entire-body {
    background-color: #bdbdbd;
    height: 100%;
    // padding: 10px;
    padding-right: 10px;
    padding-left: 10px;
  }
  &__top-part {
    padding-left: 3px;
    padding-right: 3px;
  }

  &__top-line {
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 7px;
  }
  &__title {
    display: flex;
    justify-content: left;
    padding-left: 25px;
    // letter-spacing: 1px;
    margin-top: 42px;
    padding-bottom: 42px;
    color: white;
    font-family: Raleway;
    font-size: 25px;
    font-weight: 800;
  }
  &__date {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
    color: white;
  }
  &__start-date {
    // border: 1px solid white;
    // border-radius: 10px;
    // text-align: center;
    padding: 8px 14px;
    margin-left: 12px;
    font-family: Raleway;
    font-size: 10px;
    letter-spacing: 1px;
  }

  &__dashed-line {
    width: 1.25vw;
    margin-top: auto;
    margin-bottom: auto;

    & hr {
      border: 1px dashed #ffffff;
      // background: #e0e0e0;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  &__end-date {
    // border: 1px solid white;
    // border-radius: 10px;
    // text-align: center;
    padding: 8px 14px;
    margin-right: 12px;
    font-family: Raleway;
    font-size: 10px;
    letter-spacing: 1px;
  }
  &__body {
    display: flex;
    justify-content: center;
  }

  &__navigation {
    width: 100%;
    &.v-list-item-group .v-list-item--active {
      // margin: 4px 10px;
      border-radius: 5px;
    }
    & hr {
      border: 1px solid #e0e0e0;
      // margin-left: 13px;
      // margin-right: 12px;
      background: #e0e0e0;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    & .v-list-item {
      padding-left: 13px;
      padding-right: 12px;
    }
    & .v-navigation-drawer {
      &__border {
        width: 0px;
      }
    }
  }

  &__titles {
    padding-left: 18px;
    font-family: Raleway;
    font-weight: 800;
    // margin: 4px 10px;
  }

  &__publish-button {
    width: 100%;
    font-weight: 900;
    margin-top: 25px;
  }
}
</style>
