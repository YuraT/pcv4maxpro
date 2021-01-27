import { RootState } from '@/store/state';
import S3, { ManagedUpload } from 'aws-sdk/clients/s3';
import { ActionTree, ActionContext } from 'vuex';
import fileStorageState from './state';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  uploadItem = 'uploadItem',
  deleteItems = 'deleteItems'
}
type FileStorageActionCtx = ActionContext<typeof fileStorageState, RootState>;

export interface FileStorageActions extends ActionTree<typeof fileStorageState, RootState> {
  uploadItem: <T extends File>(
    ctx: FileStorageActionCtx,
    payload: {
      item: T;
    }
  ) => Promise<ManagedUpload.SendData>;
  deleteItem: (
    ctx: FileStorageActionCtx,
    payload: { key: string }
  ) => Promise<S3.DeleteObjectOutput>;
}
export const actions: FileStorageActions = {
  uploadItem({ state, commit }, { item }) {
    return new Promise((resolve, reject) => {
      state.bucket.upload(
        {
          Bucket: state.BUCKET,
          Key: `${Date.now()}_${item.name}`,
          Body: item,
          ContentType: item.type,
          ACL: 'public-read'
        },
        (err, data) => {
          if (err) {
            commit(MutationTypes.FILE_UPLOAD_ERROR);
            reject(new Error('Could not upload file'));
          }
          commit(MutationTypes.FILE_UPLOAD);
          resolve(data);
        }
      );
    });
  },
  deleteItem({ state, commit }, { key }) {
    return new Promise((resolve, reject) => {
      state.bucket.deleteObject(
        {
          Bucket: state.BUCKET,
          Key: key
        },
        (err, data) => {
          if (err) {
            commit(MutationTypes.FILE_DELETE_ERROR);
            reject(new Error('Could not Delete File'));
          }
          commit(MutationTypes.FILE_DELETE);
          resolve(data);
        }
      );
    });
  }
};
