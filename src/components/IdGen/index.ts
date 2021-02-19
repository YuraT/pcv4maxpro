import shortId from 'shortid';

type key = { id: string };
type keyedCollection<T> = (T & key)[];
export function generateId<T extends { [x: string]: any }>(
  collection: T[],
  map: 'simple' | 'unique'
): keyedCollection<T> {
  return collection.map((item, index) => ({
    ...item,
    id: map === 'simple' ? index : shortId()
  }));
}
export { default } from './IdGen.vue';
