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
        <v-btn small depressed rounded dark color="#ae90b0" class="pc-select__spacing"
          >By Employers</v-btn
        >
        <v-btn small depressed rounded dark color="#6eba80" class="pc-select__spacing"
          >For Students</v-btn
        >
        <v-btn small rounded outlined depressed class="pc-select__spacing">4 Hours Setup</v-btn>
      </div>
    </v-card-text>

    <v-card-subtitle class="pc-select__template-description"
      >Crowdsource projects from students to award internships, contracts & opportunities
    </v-card-subtitle>

    <!-- <v-divider></v-divider> -->
    <v-card-text class="pc-select__title-head">
      <!-- <div class="pc-select__title-head-left pc-select__price-tag">
        $0
        <span class="pc-select__price-tag-unit">per month</span>
      </div> -->

      <!-- <div class="pc-select__title-head-left pc-select__price-tag">Invite only</div> -->

      <div class="pc-select__title-head-right">
        <v-btn
          color="grey lighten-1"
          x-large
          dark
          class="font-weight-black"
          rounded
          depressed
          @click="$emit('license')"
          >Select</v-btn
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
    <!-- <v-btn class="ml-4 mt-5" x-small rounded outlined depressed disabled>Participants</v-btn>
    <v-card-text class="mb-5">
      <v-chip color="#6eba80" depressed dark class="pc-select__spacing">Students</v-chip>
    </v-card-text> -->

    <!-- <v-card-subtitle class="pc-select__user-type-title">Setup Required</v-card-subtitle> -->

    <v-btn class="ml-4 mt-6" x-small rounded outlined depressed disabled
      >Student Activities & Deliverables</v-btn
    >
    <v-card-text class="mb-5">
      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            v-bind="attrs"
            color="green"
            depressed
            outlined
            class="pc-select__spacing"
            v-on="on"
            >Setup Program</v-chip
          >
        </template>
        <span>Enter general information, preferences & qualifications (Setup Required)</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            v-bind="attrs"
            color="green"
            depressed
            outlined
            class="pc-select__spacing"
            v-on="on"
            >Request for Projects</v-chip
          >
        </template>
        <span>Create a project scope for students (Setup Required)</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" color="green" depressed dark class="pc-select__spacing" v-on="on"
            >Team</v-chip
          >
        </template>
        <span>Students join, create & manage teams</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" color="green" depressed dark class="pc-select__spacing" v-on="on"
            >Discord</v-chip
          >
        </template>
        <span>Students join PilotCity student community</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            v-bind="attrs"
            color="green"
            depressed
            outlined
            class="pc-select__spacing"
            v-on="on"
            >Train</v-chip
          >
        </template>
        <span>Insert podcast, vlogs & videos for students to watch (Setup Required)</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            v-bind="attrs"
            color="green"
            depressed
            outlined
            class="pc-select__spacing"
            v-on="on"
            >Research</v-chip
          >
        </template>
        <span>Insert useful links for project resources (Setup Required)</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" color="green" depressed dark class="pc-select__spacing" v-on="on"
            >Practice</v-chip
          >
        </template>
        <span>Students log time they're spending on the project</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" color="green" depressed dark class="pc-select__spacing" v-on="on"
            >Ideate</v-chip
          >
        </template>
        <span> Students brainstorm ideas for their projects</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" color="green" depressed dark class="pc-select__spacing" v-on="on"
            >Pitch</v-chip
          >
        </template>
        <span>Students write their one sentence and elevator pitches</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" color="green" depressed dark class="pc-select__spacing" v-on="on"
            >Forum</v-chip
          >
        </template>
        <span>Students ask & answer each others questions (employers can too)</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" color="green" depressed dark class="pc-select__spacing" v-on="on"
            >Design & Prototype</v-chip
          >
        </template>
        <span>Students log milestones in their creation process</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" color="green" depressed dark class="pc-select__spacing" v-on="on"
            >Demonstrate</v-chip
          >
        </template>
        <span>Students record a demonstration of their projects</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" color="green" depressed dark class="pc-select__spacing" v-on="on"
            >Present</v-chip
          >
        </template>
        <span>Students record a presentation of their project</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" color="green" depressed dark class="pc-select__spacing" v-on="on"
            >Auto-Application</v-chip
          >
        </template>
        <span>Students review and auto-apply for your internship</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" color="green" depressed dark class="pc-select__spacing" v-on="on"
            >Interview</v-chip
          >
        </template>
        <span>Students asynchronously interview with employers & preset video questions</span>
      </v-tooltip>

      <v-tooltip top color="black">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            v-bind="attrs"
            color="green"
            depressed
            outlined
            class="pc-select__spacing"
            v-on="on"
            >Offer</v-chip
          >
        </template>
        <span>Design your position offer to winning students (Setup Required)</span>
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
