<template>
  <div>
    <div class="setupprogram__body">
      <div class="setupprogram__toplabels" stepper-elevation="0">
        <v-stepper value="2" alt-labels>
          <v-stepper-header>
            <v-stepper-step step="1" complete>Select</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2">Details</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">Manage</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </div>
      <div class="setupprogram__title">Setup Program</div>
      <div class="setupprogram__uploadbox text-center" color="gray">
        <v-btn class="setupprogram__icon" size="large" text icon color="gray lighten-2">
          <v-icon x-large="5">mdi-arrow-up-bold-circle</v-icon>
        </v-btn>
      </div>
      <div class="setupprogram__pname font-weight-bold">Program Title</div>
      <div class="setupprogram__pinput">
        <v-text-field hide-details label="Program Title" single-line outlined dense></v-text-field>
      </div>
      <div class="setupprogram__description font-weight-bold">Description</div>
      <div class="setupprogram__dinput">
        <v-textarea hide-details label="Description" full-width single-line outlined></v-textarea>
      </div>
      <div class="setupprogram__calendartitles">
        <div class="setupprogram__frequency font-weight-bold">Frequency</div>
        <div class="setupprogram__startdate font-weight-bold">Start Date</div>
        <div class="setupprogram__enddate font-weight-bold">End Date</div>
      </div>
      <div class="setupprogram__calendarinputs">
        <div class="setupprogram__finput">
          <v-combobox v-model="select" hide-details :items="items" outlined dense></v-combobox>
        </div>
        <div class="setupprogram__cinput">
          <v-combobox v-model="select" hide-details :items="items" outlined dense></v-combobox>
        </div>
        <div class="setupprogram__cinput1">
          <v-combobox v-model="select" hide-details :items="items" outlined dense></v-combobox>
        </div>
      </div>

      <div class="setupprogram__oname font-weight-bold">Organizer Name</div>
      <div class="setupprogram__oinput">
        <v-text-field hide-details label="Organizer Name" single-line outlined dense></v-text-field>
      </div>
      <div class="setupprogram__olocation font-weight-bold">Organizer Location</div>
      <div class="setupprogram__olinput">
        <v-text-field
          hide-details
          label="Organizer Location"
          single-line
          outlined
          dense
        ></v-text-field>
      </div>

      <div class="setupprogram__qualification">
        <div class="setupprogram__q1 font-weight-bold">Qualification #1</div>
        <div class="setupprogram__q1input">
          <v-combobox v-model="select" hide-details :items="items" outlined dense></v-combobox>
        </div>
      </div>

      <div class="setupprogram__qualification2">
        <div class="setupprogram__q2 font-weight-bold">Qualification #2</div>
        <div class="setupprogram__q2input">
          <v-combobox v-model="select" hide-details :items="items" outlined dense></v-combobox>
        </div>
      </div>

      <div class="setupprogram__qualification3">
        <div class="setupprogram__q3 font-weight-bold">Qualification #3</div>
        <div class="setupprogram__q3input">
          <v-combobox v-model="select" hide-details :items="items" outlined dense></v-combobox>
        </div>
      </div>

      <div class="setupprogram__complete">
        <v-btn class="setupprogram__button text-center font-weight-bold" depressed outlined>
          Complete
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Setup'
};
</script>

<style lang="scss">
.setupprogram {
  &__title {
    margin-top: 18%;
    margin-left: 2%;
    font-family: Raleway;
    font-size: 36px;
    font-weight: 800;
  }
}

.setupprogram {
  stepper-elevation: 0;
  margin-top: 8.3%;
}

.setupprogram {
  &__body {
    display: flex;
    flex-direction: column;
    margin-left: 3.88%;
    margin-right: 3.88%;
    max-width: 550px;
    margin-top: 8.3%;
    font-family: Raleway;
  }

  &__uploadbox {
    margin-top: 3.41%;
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    border: 1px solid #bcbec0;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: Raleway;
  }

  &__icon {
    width: 100px;
    height: 100px;
    margin-bottom: 20%;
    margin-top: 20%;
    font-family: Raleway;
    background: #c4c4c4;
  }

  &__pname {
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    margin-left: 1%;
    font-family: Raleway;
  }

  &__pinput {
    max-width: 550px;
    font-family: Raleway;
  }

  &__description {
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    margin-left: 1%;
    font-family: Raleway;
  }

  &__dinput {
    max-width: 550px;
    font-family: Raleway;
  }

  &__calendartitles {
    display: flex;
    flex-direction: row;
    max-width: 550px;
    font-family: Raleway;
  }

  &__frequency {
    // margin-left: 1%;
    // margin-right: 19%;
    font-family: Raleway;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    width: 33%;
    margin-left: 1%;
  }

  &__startdate {
    // margin-right: 18%;
    font-family: Raleway;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    width: 33%;
    margin-left: 1%;
  }

  &__enddate {
    // margin-left: 0%;
    font-family: Raleway;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    width: 33%;
    margin-left: 1%;
  }

  &__calendarinputs {
    display: flex;
    flex-direction: row;
    font-family: Raleway;
  }

  &__finput {
    max-width: 33%;
    font-family: Raleway;
  }

  &__cinput {
    max-width: 33%;
    margin-left: 1%;
    font-family: Raleway;
  }

  &__cinput1 {
    max-width: 33%;
    margin-left: 1%;
    font-family: Raleway;
  }

  &__oname {
    margin-left: 1%;
    font-family: Raleway;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
  }

  &__oinput {
    max-width: 550px;
    font-family: Raleway;
  }

  &__olocation {
    margin-left: 1%;
    font-family: Raleway;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
  }

  &__olinput {
    max-width: 550px;
    font-family: Raleway;
  }

  &__qualification {
    display: flex;
    flex-direction: row;
    max-width: 550px;
    font-family: Raleway;
  }

  &__q1 {
    // margin-left: 0.5%;
    margin-right: 17.5%;
    padding-top: 6.5%;
    font-family: Raleway;
  }

  &__q1input {
    width: 60%;
    max-width: 70%;
    font-family: Raleway;
    margin-top: 5%;
  }

  &__qualification2 {
    display: flex;
    flex-direction: row;
    max-width: 550px;
    font-family: Raleway;
  }

  &__q2 {
    // margin-left: 0.5%;
    margin-right: 17.5%;
    padding-top: 6.5%;
    font-family: Raleway;
  }

  &__q2input {
    width: 60%;
    max-width: 70%;
    font-family: Raleway;
    margin-top: 5%;
  }

  &__qualification3 {
    display: flex;
    flex-direction: row;
    max-width: 550px;
    font-family: Raleway;
  }

  &__q3 {
    // margin-left: 0.5%;
    margin-right: 17.5%;
    padding-top: 6.5%;
  }

  &__q3input {
    width: 60%;
    max-width: 70%;
    font-family: Raleway;
    margin-top: 5%;
  }

  &__button {
    justify-content: center;
    max-width: 550px;
    width: 100%;
    margin-top: 10%;
    margin-bottom: 20%;
    font-family: Raleway;
  }
}
</style>
