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
          :timeline="adks"
          :title="programDoc.title"
        />
        <guide-bar v-else v-model="currentPage" :timeline="adks" />
      </div>
      <div class="guide__page">
        <div class="guide__locks guide__locks--left unlocked">
          <v-icon large color="grey lighten-1" class="guide__lock">mdi-chevron-left</v-icon>
          <!-- STUDENT VIEW -->
          <!-- <v-icon large color="green" class="guide__lock">mdi-lock-open</v-icon> -->
          <!-- <v-icon large color="grey lighten-1" class="guide__lock" @click="prevPage"
            >mdi-lock-open</v-icon
          > -->
          <v-icon large color="green" class="guide__lock" @click="prevPage"
            >mdi-check-circle</v-icon
          >
        </div>

        <!-- <component :is="currentUnit" v-if="programDoc" v-model="programDoc" @save="updateProgram" /> -->
        <div class="guide__activities">
          <div class="guide__setupbutton">
            <v-btn small depressed dark color="#dedede">Setup Mode</v-btn>
          </div>
          <component
            :is="currentUnit"
            v-if="programDoc"
            :value="programDoc"
            @input="programDoc = $event"
            @save="updateProgram"
          />
        </div>
        <div class="guide__locks guide__locks--right locked">
          <!-- STUDENT VIEW -->
          <!-- <v-icon large color="red" class="guide__lock">mdi-lock</v-icon> -->
          <v-icon large color="orange" class="guide__lock" @click="nextPage"
            >mdi-progress-wrench</v-icon
          >
          <!-- <v-icon large color="grey lighten-1" class="guide__lock" @click="nextPage"
            >mdi-lock-open</v-icon
          > -->
          <v-icon large color="grey lighten-1" class="guide__lock">mdi-chevron-right</v-icon>
        </div>
      </div>
    </v-skeleton-loader>
  </Loading>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref } from '@vue/composition-api';
// import Forum from 'developer-adk-interact';
// import demo from 'developer-adk-demo/src/Module/Module.vue';
// import autoapply from 'developer-adk-autoapply/src/Module/Module.vue';
// import interact from 'developer-adk-interact/src/Module/Module.vue';
// import rfp from 'developer-adk-rfp/src/Module/Module.vue';
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
    // rfp,
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
    const adks = ref([
      'setup',
      // 'rfp'
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
    const currentPage = ref(0);
    const currentUnit = computed(() => adks.value[currentPage.value]);
    function nextPage() {
      currentPage.value += 1;
      if (currentPage.value > adks.value.length - 1) currentPage.value = 0;
    }
    function prevPage() {
      currentPage.value -= 1;
      if (currentPage.value < 0) currentPage.value = 0;
    }
    // Layout
    // Program Data Logic
    const { collection } = useDbGetters(['collection']);

    const programDoc: Ref<any> = ref(null);
    async function fetchProgram() {
      programDoc.value = await collection.value!('Program').findOne({
        _id: new ObjectId(ctx.root.$route.params.programId)
      });
      // initialize Properties
      programDoc.value = {
        adks: [
          {
            name: 'RFP'
          }
        ],
        ...programDoc.value
      };
    }
    async function updateProgram() {
      await collection.value!('Program').findOneAndUpdate(
        {
          _id: new ObjectId(ctx.root.$route.params.programId)
        },
        programDoc
      );
    }
    return {
      currentUnit,
      currentPage,
      nextPage,
      prevPage,
      adks,
      fetchProgram,
      programDoc,
      updateProgram
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
    border: 12px solid #dedede;
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
    // padding-left: auto;
    // padding-right: auto;
    // justify-content: center !important;
    // align-items: center !important;
    // margin: 25px;
    position: fixed;
    background-color: transparent;
    padding-top: 25px;
    padding-left: 25px;
    // margin-left: auto !important;
    // margin-right: auto !important;
    // margin-right: 300px;
    z-index: 1;
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
