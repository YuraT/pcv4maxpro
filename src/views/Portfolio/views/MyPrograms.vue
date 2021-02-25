<template>
  <div>
    <div class="my-program">
      <div class="my-programs pc-container">
        <div class="my-programs__wrapper">
          <h4 class="my-programs__programs-title">My Programs</h4>
          <!-- EMPLOYER PROGRAM CARD START -->
          <div class="mt-5 mb-5" style="width: 100%">
            <div v-for="(program, index) in myPrograms" :key="index" class="pc-program-card">
              <div class="pc-program-card__image">
                <v-img
                  src="https://picsum.photos/510/300?random"
                  class="pc-program-card__image"
                ></v-img>
              </div>
              <div class="pc-program-card__content">
                <h5 class="pc-program-card__title">
                  {{ program.programName || 'Setup up your program now' }}
                </h5>
                <!-- <h4 class="pc-program-card__progress">75%</h4> -->
                <div class="pc-program-card__actions">
                  <!-- <div class="pc-program-card__progress-bar"> -->

                  <!-- <v-progress-linear
                    class="green lighten-1"
                    rounded
                    green
                    height="9"
                  ></v-progress-linear> -->
                  <!-- </div> -->
                  <router-link
                    class="pc-program-card__outline"
                    :to="{ name: 'guide', params: { programId: program._id, page: '0' } }"
                  >
                    <v-btn outlined light class="pc-program-card__button w-button"
                      >Finish Setup</v-btn
                    >
                  </router-link>
                  <!-- <a href="#" class="pc-program-card__button w-button">Checkout</a> -->
                </div>
              </div>
            </div>
          </div>
          <!-- EMPLOYER PROGRAM CARD END -->

          <!-- STUDENT PROGRAM CARD START -->
          <div class="mt-5 mb-5" style="width: 100%">
            <!-- <div v-else class="pc-program-card">
              <div class="pc-program-card__image">
                <v-img
                  src="https://picsum.photos/510/300?random"
                  class="pc-program-card__image"
                ></v-img>
              </div>
              <div class="pc-program-card__content">
                <h5 class="pc-program-card__title">Program Name</h5>
                <h4 class="pc-program-card__progress">75%</h4>
                <div class="pc-program-card__actions">
                  <div class="pc-program-card__progress-bar">

                  <v-progress-linear
                    class="green lighten-1"
                    rounded
                    green
                    height="9"
                  ></v-progress-linear>
                  </div>
                  <div class="pc-program-card__outline">
                    <v-btn outlined light class="pc-program-card__button w-button"
                      >Continue Program</v-btn
                    >
                  </div>
                  <a href="#" class="pc-program-card__button w-button">Checkout</a>
                </div>
              </div>
            </div> -->
          </div>
          <!-- STUDENT PROGRAM CARD END -->

          <!-- STAKEHOLDER PROGRAM CARD START -->
          <!-- <div class="mt-5 mb-5" style="width: 100%">
            <div v-if="tile" class="tile">
              <div class="pc-program-card">
                <div class="pc-program-card__image">
                  <v-img
            src="https://picsum.photos/510/300?random"
            class="pc-program-card__completed"
          ></v-img>
                </div>
                <div class="pc-program-card__content">
                  <h5 class="pc-program-card__title">Program Name</h5>
                  <a href="#" class="pc-program-card__button w-button">Results</a>

                  <v-btn outlined light class="pc-program-card__button w-button">Setup</v-btn>
                </div>
              </div>
            </div>
            <div v-else class="pc-program-card">
              <div class="pc-program-card__image">
                <v-img
                  src="https://picsum.photos/510/300?random"
                  class="pc-program-card__image"
                ></v-img>
              </div>
              <div class="pc-program-card__content">
                <div class="d-flex">
                  <h5 class="pc-program-card__title">Flagship Program</h5>
                  <div class="ml-3 pt-1">
                    <v-btn x-small depressed disabled
                      >Build employer projects to win internships</v-btn
                    >
                  </div>
                </div>

                <div class="">
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                  <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar class="ma-1" v-bind="attrs" size="36" v-on="on">
                        <img src="https://picsum.photos/510/300?random" />
                      </v-avatar>
                    </template>
                    <span>Derick Lee</span>
                  </v-tooltip>
                </div>
                <h4 class="pc-program-card__progress">75%</h4>
                <div class="pc-program-card__actions">
                  <div class="pc-program-card__progress-bar">

                  <v-progress-linear
                    class="green lighten-1"
                    rounded
                    green
                    height="9"
                  ></v-progress-linear>
                  </div>
                  <div class="pc-program-card__outline">
                    <div
                      class="pc-program-card__button-sidekick d-flex justify-center align-center w-button mb-10"
                    >
                      42 Participants
                    </div>
                    <v-btn outlined light class="pc-program-card__button w-button mb-10"
                      >Monitor Progress</v-btn
                    >
                  </div>
                  <a href="#" class="pc-program-card__button w-button">Checkout</a>
                </div>
              </div>
            </div>
          </div> -->
          <!-- STAKEHOLDER PROGRAM CARD END -->

          <v-hover v-slot:default="{ hover }">
            <div class="my-programs__card1-border">
              <v-card
                class="my-programs__card1 text-h5 font-weight-black"
                :elevation="hover ? 6 : 0"
              >
                <v-dialog v-model="dialog" width="650">
                  <template v-slot:activator="{ on, attrs }">
                    <div class="my-programs__card2">
                      <v-btn x-large icon color="gray" v-bind="attrs" v-on="on">
                        <v-icon x-large>mdi-plus</v-icon>
                      </v-btn>
                    </div>
                  </template>
                  <v-card class="my-programs__dialog">
                    <v-icon color="green" x-large>mdi-rocket-outline</v-icon>
                    <v-card-title class="my-programs__dialog-title">
                      We're experiencing program delays. <br />Programs will now be launching Mon,
                      March 8th, 2021. <br />Thank you for your patience.</v-card-title
                    >
                    <v-btn
                      class="my-programs__dialog-button"
                      rounded
                      outlined
                      large
                      color="primary lighten-3"
                      @click="dialog = false"
                      >Back to Portfolio</v-btn
                    >
                  </v-card>
                </v-dialog>
              </v-card>
            </div>
          </v-hover>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.my-programs {
  & {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    max-width: 93.5%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  &__programs-title {
    width: 100%;
    font-size: 25px;
    line-height: 35px;
    margin-bottom: 33px;
    font-family: Raleway;
    font-weight: 800;
  }
  &__wrapper {
    width: 100%;
    max-width: 80%;
    margin-top: 50px;
  }
  &__wrapper-col {
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    justify-items: start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    grid-template-areas: 'Area Area-2' 'Area-3 Area-4';
    -ms-grid-columns: 1fr 0vw 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto 16px auto;
    grid-template-rows: auto auto;
  }
  &__card1 {
    width: 100%;
    height: 200px;
    background-color: white;
    text-align: center;
    color: gray;

    transition: opacity 0.1s ease-in-out;
  }

  &__card1-border {
    border: 1px dashed #c7c8ca;
  }
  &__card2 {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
  }

  &__card2-border {
    border: 1px dashed #c7c8ca;
  }
  &__popup {
    font-family: Raleway !important;
  }

  &__dialog {
    text-align: center;
    padding: 25px;
  }

  &__dialog-title {
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  &__dialog-button {
    margin: 20px;
  }
}
.my-program {
  display: block;
}
@media screen and (min-width: 1920px) {
  .my-programs__wrapper-col {
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 991px) {
  .my-programs__tab {
    margin-right: 0px;
    margin-left: 0px;
  }
  .my-programs__wrapper-col {
    grid-template-areas: 'Area' 'Area-3';
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 767px) {
  .my-programs__container {
    margin-top: 213px;
  }
}

// START OF PC PROGRAM CARD STYLING
.pc-program-card {
  display: flex;
  // border: 1px solid #404142 !important;
  // border: 1px solid #ae90b0 !important;

  &__outline {
    margin-left: auto;
    display: flex;
    flex-direction: row;
  }
  &__content {
    width: 100%;
    margin-top: 0px;
    padding: 19px 29px 0px 23px;
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
  }
  &__image {
    width: 100%;
    height: 210px;
    max-width: 300px;
    min-width: 0px;
    background-color: #dbdbdb;
    // border-right: 1px solid black;
  }
  &__title {
    font-size: 22px;
    line-height: 30px;
    font-weight: 800;
    text-align: left;
    margin-bottom: 22px;
    font-family: 'Raleway';
  }

  &__progress {
    font-size: 32px;
    line-height: 15px;
    font-family: 'Raleway';
    font-weight: 800;
    color: #6fba7f;
  }

  &__actions {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    // margin-top: 18px;
    padding-top: 28px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  &__button {
    min-width: 200px;
    min-height: 40px;
    margin-top: 18px;
    padding-right: 40px;
    padding-left: 40px;
    border: 1px solid #000;
    border-radius: 10px;
    background-color: #fff;
    color: #000000;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    font-family: Raleway;
    font-weight: 900;
    &:hover {
      color: #fff;
      background-color: #404142;
    }
  }

  &__button-sidekick {
    min-height: 40px;
    margin-top: 18px;
    padding-right: 40px;
    padding-left: 40px;
    border-radius: 10px;
    background-color: #fff;
    color: #000000;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.125em;
    text-transform: uppercase;
    // text-align: center;
    // text-decoration: none;
    font-family: Raleway;
  }

  &__progress-bar {
    height: 10px;
  }
}

.tile {
  .pc-program-card {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 200px;
    // margin-top: 33px;
    border: 1px solid #000;
    border-radius: 1px;

    &__image {
      max-width: 100%;
      height: 200px;
      background-color: #dbdbdb;
    }
    &__completed {
      width: 1220px;
    }
    &__content {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      height: 100%;
      max-height: 175px;
      min-height: 150px;
      padding-bottom: 25px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
    &__title {
      // margin-top: 40px;
      // font-size: 30px;
      // line-height: 30px;
      // font-weight: 700;
      text-align: center;

      font-size: 22px;
      line-height: 30px;
      font-weight: 800;
      font-family: 'Raleway';
    }
  }
}
@media screen and (max-width: 991px) {
  .tile .pc-program-card {
    max-width: 100%;
  }
}
@media screen and (max-width: 767px) {
  .pc-program-card__image {
    height: 100%;
    min-height: 200px;
  }
}
@media screen and (max-width: 479px) {
  .pc-program-card__image {
    display: none;
  }
  .pc-program-card__button {
    max-height: 100%;
  }
}
</style>
<script lang="ts">
import { computed, onMounted, Ref, ref } from '@vue/composition-api';
import { useAuthGetters, useDbGetters, useDbState } from '@/store';
// import ProgramCard from '../components/PCProgramCard.vue';

export default {
  components: {
    // 'program-card': ProgramCard
  },
  setup() {
    const dialog = ref(false);
    const { user } = useDbState(['user']);
    const role = computed(() => {
      const types = user.value?.userTypes;
      if (types?.includes('School') || types?.includes('Parent') || types?.includes('Teacher'))
        return 'Monitor';
      if (types?.includes('Employer')) return 'Manage';
      return 'none';
    });
    const { getObjectId } = useAuthGetters(['getObjectId']);
    const { collection } = useDbGetters(['collection']);
    const myPrograms = ref([]) as Ref<any[]>;
    const getPrograms = async () => {
      myPrograms.value = await collection.value!('Program').find({
        organizers: getObjectId.value,
        lastSaved: { $exists: true }
      });
    };
    onMounted(() => {
      getPrograms();
    });
    return {
      role,
      dialog,
      getPrograms,
      myPrograms
    };
  }
};
</script>
