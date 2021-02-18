<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
// import Navbar from '@/components/Navbar.vue';
import Navbar from '@/components/Navbar.vue';
import '@/styles/main.scss';
import { computed } from '@vue/composition-api';
import { useToolGetters, useAuthGetters } from '@/store';
// import Profile from 'src/views/Portfolio/Profile.vue';
/* eslint-disable */

export default Vue.extend({
  name: 'App',
  components: {
    Navbar
    // Profile
  },
  setup(props, { root }) {
    document.title = 'PilotCity  |  Digital programs, for digital cities';
    const { getLinearLoading: loading } = useToolGetters(['getLinearLoading']);

    const layout = computed(() => {
      return `${root.$route.meta.layout || 'default'}-layout`;
    });
    // Load Heap
   //@ts-ignore

window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
   //@ts-ignore
  heap.load(process.env.NODE_ENV === "production" ?'2555910188':'3339931603');
    return {
      layout,
      getUser: useAuthGetters(['getUser']).getUser,
      loading,
    };
  }
});
</script>
