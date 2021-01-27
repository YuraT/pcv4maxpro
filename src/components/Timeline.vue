<template>
  <div>
    <div v-if="horizontal" class="pc-timeline horizontal">
      <div v-for="step in steps" :key="step.text" @click="handleSelect(step.text)">
        <div class="pc-timeline__step" :class="{ parent: step.parent }">
          <div class="pc-timeline__step-icon" :class="{ active: step.active }">
            <div class="pc-timeline__step--active"></div>
          </div>
          <div class="pc-timeline__step-text">{{ step.text }}</div>
        </div>
        <hr class="pc-timeline__content" />
      </div>
    </div>
    <div v-else class="pc-timeline">
      <div v-for="step in steps" :key="step.text" @click="handleSelect(step.text)">
        <div class="pc-timeline__step" :class="{ parent: step.parent }">
          <div class="pc-timeline__step-icon" :class="{ active: step.active }">
            <div class="pc-timeline__step--active"></div>
          </div>
          <div class="pc-timeline__step-text">{{ step.text }}</div>
        </div>
        <div class="pc-timeline__content"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from '@vue/composition-api';
import { TimelineItem } from './types';

export default {
  props: {
    horizontal: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default(): TimelineItem[] {
        return [
          {
            parent: true,
            text: 'Parent'
          },
          {
            parent: false,
            text: 'child'
          }
        ];
      },
      required: true
    },
    color: {
      type: String,
      default: 'black'
    }
  },
  setup(props, { emit }) {
    const steps = computed(() => {
      return props.items;
    });

    function handleSelect(value) {
      emit('SelectTimeline', value);
    }
    return { handleSelect, steps };
  }
};
</script>
<style lang="scss">
.pc-timeline {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  & > div:last-child {
    .pc-timeline__content {
      display: none;
    }
  }
  &__content {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: -3px 24px -11px 23px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-left: 1px solid #828282;
  }
  &__step {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 16px;
    padding-bottom: 8px;
    padding-left: 16px;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-content: space-between;
    -ms-flex-line-pack: justify;
    align-content: space-between;
    &-icon {
      position: static;
      display: flex;
      width: 16px;
      height: 16px;
      min-width: 16px;
      margin-right: 20px;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      border: 1px solid #828282;
      border-radius: 50%;
      -o-object-fit: fill;
      object-fit: fill;

      &.active {
        .pc-timeline__step--active {
          display: flex;
        }
      }
    }
    &-text {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      font-family: Raleway, sans-serif;
      color: #bdbdbd;
      font-size: 9.75px;
      line-height: 11px;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }
    &--active {
      width: 10px;
      height: 10px;
      border-radius: 50%;

      background-color: #6eba7f;
      display: none;
    }
  }
}
.parent {
  &.pc-timeline__step {
    padding-left: 8px;
  }
  .pc-timeline__step {
    &--active {
      width: 32px;
      height: 32px;
      min-width: 32px;
      border-radius: 50%;
      background-color: #6eba7f;
    }
    &-icon {
      position: static;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 32px;
      height: 32px;
      min-width: 32px;
      margin-right: 10px;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      border: 1px solid #828282;
      border-radius: 50%;
      -o-object-fit: fill;
      object-fit: fill;

      &.active {
        .pc-timeline__step--active {
          display: flex;
        }
      }
    }
    &-text {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      font-family: Raleway, sans-serif;
      color: #bdbdbd;
      font-size: 16px;
      line-height: 16px;
      font-weight: 800;
      letter-spacing: 0.15em;
      text-transform: capitalize;
    }
  }
}
.horizontal {
  &.pc-timeline {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    & > div:last-child {
      flex-grow: 0;
    }
    & > div {
      display: flex;
      flex-grow: 1;
      align-items: center;
    }
  }
  .pc-timeline {
    &__content {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin: -3px 11px -3px 5px;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      border: 1px solid #bdbdbd;
      padding: 0;
    }
    &__step {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-top: 0px;
      margin-bottom: 0px;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 0px;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-align-content: space-between;
      -ms-flex-line-pack: justify;
      align-content: space-between;
    }
  }
}
</style>
