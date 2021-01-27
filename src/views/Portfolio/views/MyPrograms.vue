<template>
  <div>
    <div class="my-program">
      <div class="my-programs pc-container">
        <div class="my-programs__wrapper">
          <h4 class="my-programs__programs-title">My Programs</h4>
          <v-hover v-slot:default="{ hover }">
            <div class="my-programs__card1-border">
              <v-card
                class="my-programs__card1 text-h5 font-weight-black"
                :elevation="hover ? 6 : 0"
              >
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <div class="my-programs__card2">
                      <v-btn x-large icon color="gray" v-bind="attrs" v-on="on">
                        <v-icon x-large>mdi-plus</v-icon>
                      </v-btn>
                    </div>
                  </template>
                  <v-card class="my-programs__dialog">
                    <v-icon color="yellow" x-large>mdi-rocket-outline</v-icon>
                    <v-card-title class="my-programs__dialog-title">
                      Programs launching January 2021.<br />Get your rockets ready.</v-card-title
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
        <div v-if="role !== 'none'" class="my-programs__wrapper">
          <h4 class="my-programs__programs-title">{{ role }}</h4>
          <v-hover v-slot:default="{ hover }">
            <div class="my-programs__card1-border">
              <v-card
                class="my-programs__card1 text-h5 font-weight-black"
                :elevation="hover ? 6 : 0"
              >
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <div class="my-programs__card2">
                      <v-btn x-large icon color="gray" v-bind="attrs" v-on="on">
                        <v-icon x-large>mdi-plus</v-icon>
                      </v-btn>
                    </div>
                  </template>

                  <v-card class="my-programs__dialog">
                    <v-icon x-large>mdi-rocket-outline</v-icon>
                    <v-card-title class="my-programs__dialog-title">
                      Programs launching January 2021.<br />Get your rockets ready.</v-card-title
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
        <!-- <div class="my-programs__wrapper">
          <h4 class="my-programs__programs-title">Completed</h4>
          <div class="my-programs__wrapper-col">
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="my-programs__card1 text-h5 font-weight-black"
                :elevation="hover ? 12 : 2"
                outlined
              >
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon color="gray" v-bind="attrs" v-on="on">
                      <v-icon x-large>mdi-plus</v-icon>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="headline grey lighten-2"> Coming Soon </v-card-title>

                    <v-divider></v-divider>

                    <v-card-text>
                      The Programs section of the platform is at the end of development and will be
                      released soon.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card>
            </v-hover>
          </div>
        </div> -->
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
</style>
<script lang="ts">
import { computed, ref } from '@vue/composition-api';
import { useDbState } from '@/store';
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
    return {
      role,
      dialog
    };
  }
};
</script>
