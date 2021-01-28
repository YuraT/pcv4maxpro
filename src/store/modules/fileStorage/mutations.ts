/* eslint-disable no-console */
import { MutationTree } from 'vuex';
import fileStorageState from './state';

export const enum MutationTypes {
  FILE_UPLOAD = '📤✔ File Upload Complete',
  FILE_UPLOAD_ERROR = '📤❌ File Upload Error',
  FILE_DELETE = '📁🗑 File Deletion Complete',
  FILE_DELETE_ERROR = '📁🗑❌ File Deletion Error'
}
export const mutations: MutationTree<typeof fileStorageState> = {
  [MutationTypes.FILE_UPLOAD]: () => {},
  [MutationTypes.FILE_UPLOAD_ERROR]() {
    console.error('Could not upload file');
  },
  [MutationTypes.FILE_DELETE]: () => {},
  [MutationTypes.FILE_DELETE_ERROR]() {
    console.error('Could not upload file');
  }
};
