<template>
  <v-card hover class="pc-select__card justify-center mx-auto" :max-width="500">
    <v-card-text class="">
      <v-avatar color="blue" size="42"
        ><v-img
          src="https://f.hubspotusercontent00.net/hubfs/2480959/P_Cutoff3-Oct-07-2020-10-55-09-87-AM.png"
        ></v-img
      ></v-avatar>
    </v-card-text>
    <v-card-title class="pc-select__template-title">Flagship Program</v-card-title>
    <v-card-text class="pc-select__template-metadata">
      <div class="pc-select__title-head-left">
        <v-btn x-small depressed rounded dark color="#ae90b0" class="pc-select__spacing"
          >For Employers</v-btn
        >
        <v-btn x-small rounded dark depressed class="pc-select__spacing">4 Hours Setup</v-btn>
        <v-btn x-small rounded dark depressed class="pc-select__spacing">Optional Management</v-btn>
      </div>
    </v-card-text>

    <v-card-subtitle class="pc-select__template-description"
      >Crowdsource projects from students to award internships, contracts & opportunities
    </v-card-subtitle>

    <v-divider></v-divider>
    <v-card-text class="pc-select__title-head">
      <div class="pc-select__title-head-left pc-select__price-tag">
        $0
        <span class="pc-select__price-tag-unit">per month</span>
      </div>

      <!-- <div class="pc-select__title-head-left pc-select__price-tag">Invite only</div> -->

      <div class="pc-select__title-head-right">
        <v-btn class="" x-large outlined rounded depressed @click="$emit('license')">Select</v-btn>
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

    <!-- <v-card-subtitle class="pc-select__user-type-title">Setup Required</v-card-subtitle> -->

    <v-btn class="ml-4" x-small rounded outlined depressed disabled
      >Activities & Deliverables</v-btn
    >
    <v-card-text class="mb-5">
      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            v-bind="attrs"
            color="grey darken-2"
            small
            depressed
            dark
            class="pc-select__spacing"
            v-on="on"
            >Request for Projects</v-chip
          >
        </template>
        <span>Setup Required</span>
      </v-tooltip>

      <v-chip color="grey" small depressed dark class="pc-select__spacing">Team</v-chip>
      <v-chip color="grey" small depressed dark class="pc-select__spacing">Discord</v-chip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            v-bind="attrs"
            color="grey darken-2"
            small
            depressed
            dark
            class="pc-select__spacing"
            v-on="on"
            >Train</v-chip
          >
        </template>
        <span>Setup Required</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            v-bind="attrs"
            color="grey darken-2"
            small
            depressed
            dark
            class="pc-select__spacing"
            v-on="on"
            >Research</v-chip
          >
        </template>
        <span>Setup Required</span>
      </v-tooltip>

      <v-chip color="grey" small depressed dark class="pc-select__spacing">Practice</v-chip>
      <v-chip color="grey" small depressed dark class="pc-select__spacing">Ideate</v-chip>
      <v-chip color="grey" small depressed dark class="pc-select__spacing">Pitches</v-chip>

      <v-chip color="grey" small depressed dark class="pc-select__spacing">Forum</v-chip>

      <v-chip color="grey" small depressed dark class="pc-select__spacing"
        >Design & Prototype</v-chip
      >
      <v-chip color="grey" small depressed dark class="pc-select__spacing"> Demonstrate</v-chip>
      <v-chip color="grey" small depressed dark class="pc-select__spacing">Present</v-chip>
      <v-chip color="grey" small depressed dark class="pc-select__spacing">Auto-Apply</v-chip>
      <v-chip color="grey" small depressed dark class="pc-select__spacing">Interview</v-chip>
      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            v-bind="attrs"
            color="grey darken-2"
            small
            depressed
            dark
            class="pc-select__spacing"
            v-on="on"
            >Offer</v-chip
          >
        </template>
        <span>Setup Required</span>
      </v-tooltip>
    </v-card-text>
    <!-- <v-card-subtitle class="pc-select__user-type-title">Sponsors and Stakeholders</v-card-subtitle> -->
    <v-btn class="ml-4" x-small rounded outlined depressed disabled>Stakeholders & Sponsors</v-btn>
    <v-card-text class="mb-5">
      <v-chip color="#eda1bf" depressed dark class="pc-select__spacing">Teachers</v-chip>
      <v-chip color="#3c9dcd" depressed dark class="pc-select__spacing">Schools</v-chip>

      <v-chip color="#fec34b" depressed dark class="pc-select__spacing">Parents</v-chip>
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
    color: #404142;
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
    margin-top: 2.5px;
    margin-bottom: 2.5px;
  }

  &__template-title {
    font-family: Raleway;
    font-size: 30px;
    color: #000000;
    font-weight: 300;
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
    font-size: 20px;
    font-weight: 800;
    // color: black !important;
    color: #404142 !important;
    line-height: 27px;
    // font-style: italic;
    // margin-top: 10px;
  }

  &__template-metadata {
    margin-top: 10px;
    // margin-bottom: 10px;
  }
}
</style>
