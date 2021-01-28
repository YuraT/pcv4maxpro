<template>
  <!-- @jerold This v-card below is now draggable, but we need how to tap into how to style it. It is a native styling function for v-chips, but I guess it works for v-card too -->
  <v-card draggable class="pc-card__entire-body" rounded-lg>
    <div class="pc-card__title text-h6">
      <div class="pc-card__main_title">
        <slot name="title"> Data Card </slot>
      </div>
      <div class="pc-card__main_settings">
        <slot name="actions">
          <v-menu left :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" small icon v-on="on"
                ><v-icon color="grey lighten-1">mdi-cog</v-icon></v-btn
              >
            </template>
            <v-card>
              <v-btn color="white" class="module__settings-menu" tile depressed>
                <v-icon left color="#404142">mdi-arrow-horizontal-lock </v-icon>Lock</v-btn
              >
              <v-divider></v-divider>
              <v-btn color="white" class="module__settings-menu" tile depressed>
                <v-icon left color="#ea6764">mdi-trash-can-outline </v-icon>Delete</v-btn
              >
              <v-divider></v-divider>
            </v-card>
          </v-menu>
        </slot>
      </div>
    </div>
    <div class="pc-card__content">
      <div class="pc-card__graph">
        <slot name="graph">
          <v-img src="https://picsum.photos/510/300?random" class="pc-card__image"></v-img>
        </slot>
      </div>
    </div>
    <div class="pc-card__progress-bar">
      <v-progress-linear
        height="10"
        buffer-value="0"
        value="0"
        stream
        color="blue"
      ></v-progress-linear>
    </div>

    <div class="pc-card__bottom-card">
      <div class="pc-card__setup-required-button">
        <!-- <v-menu v-model="menu" top :close-on-content-click="false" offset-y>
          <template v-slot:activator="{ on, attrs }"> -->
        <v-btn color="blue" depressed dark rounded x-small>Research</v-btn>
        <!-- </template>
          <v-card>
            <v-btn x-small rounded color="white" class="pc-card__settings-menu" tile depressed
              >Project</v-btn
            >
            <v-divider></v-divider>
            <v-btn x-small rounded color="white" class="pc-card__settings-menu" tile depressed
              >Auto-Apply</v-btn
            >
            <v-divider></v-divider>
          </v-card>
        </v-menu> -->
      </div>
      <div class="pc-card__setup-required">
        <v-btn x-small rounded outlined color="red" depressed>Setup Required</v-btn>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import {} from '@vue/composition-api';

export default {
  name: 'PCCard',
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.pc-card {
  &__entire-body {
    height: 100%;
  }
  &__settings-menu {
    width: 100%;
    // text-align:left;
    // justify-content:flex-start;
    // align-items:flex-start;
    // margin-right:auto;
    text-align: left;
  }
  &__title {
    display: flex;
    justify-content: space-between;
  }
  &__main_title {
    display: flex;
    font-family: Raleway;
    font-weight: 800;
    padding-left: 10px;
  }
  &__main_settings {
    display: flex;
    padding-right: 3px;
  }
  &__content {
    padding: 10px;
    background-color: #dedede;
    // background-color: #3c9dcd;
    // border: 1px solid #f2f2f2;
    border-radius: 10px;
  }

  &__image {
    // height: 100%;
  }

  &__graph {
    border-radius: 10px;
    // border-bottom: 10px solid #404142;
  }

  &__bottom-card {
    flex-direction: row;
    display: flex;
  }

  &__setup-required {
    margin-left: auto;
    margin-top: 5px;
  }

  &__setup-required-button {
    margin-right: auto;
    margin-top: 5px;
  }

  &__progress-bar {
    margin-top: 5px;
  }
}
</style>
