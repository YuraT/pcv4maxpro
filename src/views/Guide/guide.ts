import { reactive, computed } from '@vue/composition-api';
import router from '@/router';
import { ProgramGuideState, ProgramGuideActions, ProgramGuideGetters } from './guide-types';

const state: ProgramGuideState = reactive({
  map: [],
  currentIndex: 0
});

const actions: ProgramGuideActions = {
  changeMap: map => {
    state.map = map;
  },
  findIndexByName: name => state.map.findIndex(units => units.unitName === name),
  gotoNext: () => {
    router.push({ name: 'programGuide', params: { unit: `${++state.currentIndex}` } });
  },
  gotoPrevious: () => {
    router.push({ name: 'programGuide', params: { unit: `${--state.currentIndex}` } });
  }
};
const getters: ProgramGuideGetters = {
  currentUnit: computed(() => state.map[state.currentIndex])
};
export { state, actions, getters };
