<template>
  <div class="select__entire-body">
    <!-- <v-subheader class="select__title mx-auto">Choose program template</v-subheader> -->
    <pc-select-card class="mt-6 ml-auto mr-auto mb-6" @license="createProgram">
      <template v-slot:title>{{ item.title }}</template>
    </pc-select-card>
  </div>
</template>

<script lang="ts">
import { useDbGetters, useAuthGetters } from '@/store';
import { PCSelectCard } from './components';

export default {
  name: 'Select',
  components: {
    'pc-select-card': PCSelectCard
  },
  setup(_props, ctx) {
    const { collection } = useDbGetters(['collection']);
    const { getObjectId } = useAuthGetters(['getObjectId']);
    async function createProgram() {
      await collection.value!('Program')
        .insertOne({
          organizers: [getObjectId.value],
          dateCreated: new Date(),
          licensed: false
        })
        .then(result => {
          ctx.root.$router.push({
            name: 'guide',
            params: { programId: result.insertedId, page: '0' }
          });
        });
    }
    return { createProgram };
  }
};
</script>

<style lang="scss">
.v-stepper--alt-labels .v-stepper__header .v-divider {
  margin-top: 45px !important;
  // margin-left: 6px !important;
  // margin-right: 6px !important;
}

.v-divider {
  // border: 3px solid #e0e0e0;
  // border: 1px dashed #e0e0e0;
}

//need to figure out how to change from imp
.theme--light.v-stepper
  .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error)
  .v-stepper__step__step {
  background: transparent !important;
}

.v-stepper__step.v-stepper__step {
  .v-stepper__step__step {
    border: 2px solid #e0e0e0;
    // background: #e0e0e0;
    // width: 42px;
    // height: 42px;
  }
}
.select {
  &__entire-body {
    height: 100%;
    // margin-left: auto;
    // margin-right: auto;
  }

  &__title {
    font-family: Raleway;
    font-weight: 800;
    color: black;
    font-size: 30px;
    margin-top: 5vh;
    // margin-left: 220px;
    max-width: 500px;
    // text-align: center;
    justify-content: center;
    // align-items: center;
  }

  &__timeline {
    &.v-stepper {
      box-shadow: none;
    }
  }

  &__stepper {
    width: 50%;
    //   // align-items: center;
    //   // justify-content: center;
    //   // text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
  }

  // &__cards {
  //   // margin-left: 220px;
  //   margin-top: 11px;
  //   // display: grid;
  //   // grid-template-columns: repeat(1, 475px);
  //   grid-template-rows: repeat(2, 375px);
  //   grid-column-gap: 47px;
  //   grid-row-gap: 43px;
  // }
}

//to swich between the grid for diff width of the screen for 786px
@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .select {
    &__cards {
      // margin-top: 50px;
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(1, 475px);
      grid-template-rows: repeat(1, 1000px);
      grid-column-gap: 47px;
      grid-row-gap: 43px;
    }
  }
}

//to swich between the grid for diff width of the screen for min of 786px and max of 1024px
@media only screen and (max-width: 1024px) {
  .select {
    &__cards {
      // margin-left: 10px;
      // margin-top: 50px;
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(1, 475px);
      grid-template-rows: repeat(1, 375px);
      grid-column-gap: 47px;
      grid-row-gap: 43px;
    }
  }
}
</style>
