// array containing sequence

// export const helpers = {};
import { ComputedRef } from '@vue/composition-api';

enum ProgramUnitTypes {
  list,
  link
}
interface ProgramUnitTab<T extends keyof typeof ProgramUnitTypes> {
  tabName: string;
  type: string;
  body: T extends 'list'
    ? string[]
    : T extends 'link'
    ? {
        name: string;
        link: string;
      }
    : null;
  pos: number;
}
interface ProgramUnit {
  unitName: string;
  collectionRef: string;
  tabs: ProgramUnitTab<keyof typeof ProgramUnitTypes>;
}
export interface ProgramGuideState {
  currentIndex: number;
  map: ProgramUnit[];
}
export interface ProgramGuideActions {
  findIndexByName: (name: string) => number;

  gotoNext: () => void;
  gotoPrevious: () => void;
  completeUnit?: () => {};
  changeMap: (map: ProgramUnit[]) => void;
}
export interface ProgramGuideGetters {
  isCurrentUnitCompleted?: ComputedRef<boolean>;
  currentUnit: ComputedRef<ProgramUnit>;
}
