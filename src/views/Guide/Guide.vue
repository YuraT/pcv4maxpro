<template>
  <Loading v-slot="{ loading }" :process-now="true" :callback="fetchProgram">
    <v-skeleton-loader
      :loading="loading"
      type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
      class="guide__container"
    >
      <div class="guide__bar">
        <guide-bar
          v-if="programDoc && programDoc.title"
          v-model="currentPage"
          :timeline="timeline"
          :title="programDoc.title"
        />
        <guide-bar v-else v-model="currentPage" :timeline="timeline" />
      </div>

      <div class="guide__page">
        <div class="guide__setupbutton">
          <v-btn small depressed dark color="orange">Setup Mode</v-btn>
        </div>

        <div v-if="currentPage != 0" class="guide__locks guide__locks--left unlocked">
          <v-icon large color="grey lighten-1" class="guide__lock" @click="prevPage"
            >mdi-chevron-left</v-icon
          >
          <!-- STUDENT VIEW -->
          <!-- <v-icon large color="green" class="guide__lock">mdi-lock-open</v-icon> -->
          <!-- <v-icon large color="grey lighten-1" class="guide__lock" @click="prevPage"
            >mdi-lock-open</v-icon
          > -->

          <v-tooltip dark right>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                v-bind="attrs"
                large
                color="green"
                class="guide__lock"
                v-on="on"
                @click="prevPage"
                >mdi-check-circle</v-icon
              >
            </template>

            <span>Last Activity Setup</span>
          </v-tooltip>
        </div>

        <!-- <component :is="currentUnit" v-if="programDoc" v-model="programDoc" @save="updateProgram" /> -->
        <div class="guide__activities">
          <component
            :is="currentUnit"
            v-if="programDoc.data.dateCreated"
            v-model="programDoc"
            :license-program="licenseProgram"
          />
        </div>
        <div class="guide__locks guide__locks--right locked">
          <!-- STUDENT VIEW -->
          <!-- <v-icon large color="red" class="guide__lock">mdi-lock</v-icon> -->
          <v-tooltip dark left>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                v-bind="attrs"
                large
                color="orange"
                class="guide__lock"
                :disabled="!isNextUnlocked"
                v-on="on"
                @click="nextPage"
                >mdi-progress-wrench</v-icon
              >
            </template>
            <span>Setup Next Activity</span>
          </v-tooltip>

          <!-- <v-icon large color="grey lighten-1" class="guide__lock" @click="nextPage"
            >mdi-lock-open</v-icon
          > -->
          <v-icon
            :disabled="!isNextUnlocked"
            large
            color="grey lighten-1"
            class="guide__lock"
            @click="nextPage"
            >mdi-chevron-right</v-icon
          >
        </div>
      </div>
    </v-skeleton-loader>
  </Loading>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref, watchEffect } from '@vue/composition-api';
// import Forum from 'developer-adk-interact';
// import demo from 'developer-adk-demo/src/Module/Module.vue';
// import autoapply from 'developer-adk-autoapply/src/Module/Module.vue';
// import interact from 'developer-adk-interact/src/Module/Module.vue';
import rfp from 'developer-adk-rfp/src/Module/Module.vue';
// import team from 'developer-adk-teamcommunity/src/Module/Module.vue';
import train from 'developer-adk-train/src/Module/Module.vue';
import research from 'developer-adk-research/src/Module/Module.vue';
// import practice from 'developer-adk-practice/src/Module/Module.vue';
// import ideate from 'developer-adk-ideate/src/Module/Module.vue';
// import pitches from 'developer-adk-pitches/src/Module/Module.vue';
// import present from 'developer-adk-present/src/Module/Module.vue';
// import interview from 'developer-adk-interview/src/Module/Module.vue';
import offer from 'developer-adk-offer/src/Module/Module.vue';
// eslint-disable-next-line import/no-unresolved
import setup from 'developer-adk-setup/src/Module/Module.vue';
// import JoinForm from 'developer-adk-joinform/src/App.vue';
import Loading from '@/components/Loading.vue';
import { useDbGetters } from '@/store';
import { ObjectId } from 'bson';
import Bar from './components/Bar.vue';

export default defineComponent({
  components: {
    'guide-bar': Bar,
    Loading,
    setup,
    // Forum,
    // interact
    // demo
    // autoapply,
    rfp,
    // team,
    train,
    research,
    // practice,
    // ideate,
    // pitches,
    // present,
    // interview,
    offer
  },
  setup(_props, ctx) {
    // ADK navigation Logic
    const adks = ref([
      'setup',
      'rfp',
      // 'team',
      'train',
      'research',
      // 'pracitce',
      // 'ideate',
      // 'pitches',
      // 'interact'
      // 'demo',
      // 'present',
      // 'autoapply',
      // 'interview',
      'offer'
    ]);

    // Layout
    // Program Data Logic
    const { collection } = useDbGetters(['collection']);
    const programDoc: Ref<{
      data: Record<string, any>; // Gives access to Document
      update: () => Promise<any>; // Gives access to update Method
      changeStream: any; // Gives access to mongodb Collection Changestream
    }> = ref({
      data: {},
      update: async () => null,
      changeStream: undefined
    });
    programDoc.value.update = async () => {
      return collection.value!('Program').findOneAndUpdate(
        {
          _id: new ObjectId(ctx.root.$route.params.programId)
        },
        { ...programDoc.value.data, lastSaved: new Date() }
      );
    };
    async function fetchProgram() {
      programDoc.value.data = await collection.value!('Program').findOne({
        _id: new ObjectId(ctx.root.$route.params.programId)
      });
      // initialize Properties
      programDoc.value.data = {
        adks: [],
        ...programDoc.value.data
      };
    }
    const timeline = computed(() =>
      adks.value.map(adk => ({
        step: adk,
        unlocked:
          programDoc.value.data.adks?.some(adkObject => adkObject.name === adk) || adk === 'setup'
            ? programDoc.value.data.licensed
            : false
      }))
    );
    // Checkout Session Logic
    // const { createCheckoutSession } = useStripeActions(['createCheckoutSession']);
    // const licensePriceId = 'price_1IENzxLnkQGEgDQncNKPhwPr';
    // const cancelUrl = window.location.href; // Bring them back to the setupprogram
    // Nav logic
    const maxIndex = adks.value.length - 1;
    const currentPage = computed({
      get: () => parseInt(ctx.root.$route.params.page, 10),
      set: newPage => {
        if (newPage <= maxIndex && newPage >= 0)
          ctx.root.$router.replace({
            params: { programId: ctx.root.$route.params.programId, page: newPage.toString() }
          });
      }
    });
    const currentUnit = computed(() => adks.value[currentPage.value]);
    const isNextUnlocked = computed(() => timeline.value[currentPage.value].unlocked);
    function nextPage() {
      if (isNextUnlocked.value) currentPage.value += 1;
    }
    function prevPage() {
      currentPage.value -= 1;
    }
    watchEffect(() => {
      const maxLength = maxIndex;
      if (currentPage.value >= maxLength) {
        currentPage.value = maxLength;
      }
      if (currentPage.value < 0) {
        currentPage.value = 0;
      }
    });
    async function licenseProgram() {
      programDoc.value.data.licensed = new Date();
      await programDoc.value.update();
      nextPage();
      // return createCheckoutSession({
      //   lineItems: [{ priceId: licensePriceId, quantity: 1 }],
      //   cancelUrl,
      //   successUrl: window.location.href.replace(/.$/, '1'), // change page to 1 i.e. setup
      //   metadata: {
      //     programId: ctx.root.$route.params.programId
      //   }
      // });
    }
    return {
      currentUnit,
      currentPage,
      nextPage,
      prevPage,
      timeline,
      fetchProgram,
      programDoc,
      licenseProgram,
      isNextUnlocked
    };
  }
});
</script>
<style lang="scss">
.guide__ {
  &container {
    width: 100%;
    // height: 100vh;
    display: flex;
    // border: 12px solid #000000;
    background-color: transparent;
  }
  &bar {
    // max-width: fit-content;
    // min-width: fit-content;
    width: fit-content;
    height: fit-content;
  }
  &page {
    width: 100%;
    height: 100vh;
    // display: flex;
    position: relative;
    border: 12px solid orange;
  }
  &activities {
    overflow: scroll;
    width: 100%;
    height: 97vh;
    // margin: none;
    // justify-content: center !important;
    // align-items: center !important;
  }

  &setupbutton {
    // text-align: center;
    // padding-left: 45%;
    // padding-right: 45%;
    // justify-content: center !important;
    // align-items: center !important;
    // margin: 25px;
    // position: absolute;
    // position: relative;
    // display: flex;
    // display: grid;
    background-color: transparent;
    // padding-top: 25px;
    // padding-left: 25px;
    // margin-left: 45%;
    // margin-right: 45%;
    // margin-top: 2%;
    // display: block;
    // margin: 0 auto;
    // margin-right: 300px;
    // right: 50;
    z-index: 1;
    // right: 15px;
    // left: 45%;
    // right: 45%;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &locks {
    height: 97vh;
    width: 70px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    &--left {
      left: 0;
      top: 0;
    }
    &--right {
      right: 0;
      top: 0;
    }
  }
  &lock {
    color: var(--v-accent-base);
    &.unlocked {
      &:hover {
        color: var(--v-success-base);
      }
    }

    &.locked {
      &:hover {
        color: var(--v-error-base);
      }
    }
  }
}
</style>
