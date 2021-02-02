<template>
  <v-card hover class="pc-select__card justify-center mx-auto" :max-width="500">
    <v-card-text class="">
      <v-avatar color="blue" size="42"
        ><v-img
          src="https://f.hubspotusercontent00.net/hubfs/2480959/P_Cutoff3-Oct-07-2020-10-55-09-87-AM.png"
        ></v-img
      ></v-avatar>
    </v-card-text>
    <v-card-title class="pc-select__template-title">PilotCity Flagship</v-card-title>
    <v-card-text class="pc-select__template-metadata">
      <div class="pc-select__title-head-left">
        <v-btn x-small depressed rounded dark color="#ae90b0" class="pc-select__spacing"
          >For Employers</v-btn
        >
        <v-btn x-small rounded outlined color="grey" class="pc-select__spacing"
          >4 Hours Setup</v-btn
        >
        <v-btn x-small rounded outlined color="grey" class="pc-select__spacing"
          >Zero Management</v-btn
        >
      </div>
    </v-card-text>

    <v-card-subtitle class="pc-select__template-description"
      >Challenge students to build projects for your organization to win internships to execute
    </v-card-subtitle>

    <v-divider></v-divider>
    <v-card-text class="pc-select__title-head">
      <div class="pc-select__title-head-left pc-select__price-tag">
        $600
        <span class="pc-select__price-tag-unit">per year</span>
      </div>

      <div class="pc-select__title-head-right">
        <v-btn class="" x-large outlined color="grey" rounded depressed @click="$emit('license')"
          >Setup</v-btn
        >
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <!-- <div class="pc-select__title-head"></div> -->

    <!-- <v-card-subtitle>Organizer</v-card-subtitle>
      <v-card-text>
        <v-chip small color="purple" depressed dark class="pc-select__spacing">Employers</v-chip>
      </v-card-text> -->

    <!-- <v-card-subtitle class="pc-select__user-type-title">Participants</v-card-subtitle> -->
    <v-btn class="ml-4 mt-5" x-small rounded outlined depressed disabled>Participants</v-btn>
    <v-card-text class="mb-5">
      <v-chip color="#6eba80" depressed dark class="pc-select__spacing">Students</v-chip>
    </v-card-text>
    <!-- <v-card-subtitle class="pc-select__user-type-title">Sponsors and Stakeholders</v-card-subtitle> -->
    <v-btn class="ml-4" x-small rounded outlined depressed disabled>Sponsors & Stakeholders</v-btn>
    <v-card-text class="mb-5">
      <v-chip color="#eda1bf" depressed dark class="pc-select__spacing">Teachers</v-chip>
      <v-chip color="#3c9dcd" depressed dark class="pc-select__spacing">Schools</v-chip>

      <v-chip color="#fec34b" depressed dark class="pc-select__spacing">Parents</v-chip>
    </v-card-text>

    <!-- <v-card-subtitle class="pc-select__user-type-title">Setup Required</v-card-subtitle> -->

    <v-btn class="ml-4" x-small rounded outlined depressed disabled>Activity Setup</v-btn>
    <v-card-text class="mb-5">
      <v-chip color="grey" small depressed dark class="pc-select__spacing"
        >Request for Projects (RFP)</v-chip
      >
      <v-chip color="grey" small depressed dark class="pc-select__spacing">Train</v-chip>
      <v-chip color="grey" small depressed dark class="pc-select__spacing">Research</v-chip>
      <v-chip color="grey" small depressed dark class="pc-select__spacing">Offer</v-chip>
    </v-card-text>

    <!-- <v-card-subtitle class="pc-select__user-type-title">Licensed By</v-card-subtitle> -->
    <v-btn class="ml-4" x-small rounded outlined depressed disabled>Licensor</v-btn>
    <v-card-text class="mb-5">
      <v-avatar color="blue" size="42"
        ><v-img
          src="https://f.hubspotusercontent00.net/hubfs/2480959/P_Cutoff3-Oct-07-2020-10-55-09-87-AM.png"
        ></v-img
      ></v-avatar>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import {} from '@vue/composition-api';

export default {
  name: 'PCSelectCard',
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.v-card__subtitle,
.v-card__text {
  letter-spacing: 0;
}
.pc-select {
  &__entire-body {
    height: 100%;
  }

  &__card {
    &.v-sheet.v-card {
      border: 7px solid #dedede;
      border-radius: 25px;
      min-height: 375px;
      max-width: 475px;
    }
  }
  &__title {
    display: flex;
    justify-content: space-around;
    margin-top: 38px;
  }
  &__button {
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    margin: auto;
    margin-top: 32px;
    width: 200px;
    height: 40px;
    background: transparent;
  }

  &__title-head {
    flex-direction: row;
    display: flex;
    // padding: 20px;
  }

  &__title-head-left {
    margin-right: auto;
  }
  &__title-head-right {
    margin-left: auto;
    // text-align: right;
  }

  &__price-tag {
    font-family: Raleway;
    font-size: 42px;
    font-weight: 600;
    color: #dedede;
    // align-items: center;
    // justify-content: center;
    // margin-top: 2vh;
    margin-top: auto;
    margin-bottom: auto;
  }

  &__price-tag-unit {
    font-size: 18px;
    font-weight: 800;
  }

  &__spacing {
    // margin-left: 5px;
    margin-right: 5px;
  }

  &__template-title {
    font-family: Raleway;
    font-size: 27px;
    color: #000000;
    font-weight: 800;
    // margin-top: 5px;
    margin-bottom: 5px;
  }

  &__template-icon {
    margin: 10px;
    margin-bottom: 0px;
  }

  &__user-type-title {
    font-family: Raleway;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: black !important;
  }

  &__template-description {
    font-family: Raleway;
    font-size: 18px;
    font-weight: 600;
    // color: black !important;
    color: #404142 !important;
    line-height: 25px;
    // font-style: italic;
    // margin-top: 10px;
  }

  &__template-metadata {
    margin-top: 10px;
    // margin-bottom: 10px;
  }
}
</style>
