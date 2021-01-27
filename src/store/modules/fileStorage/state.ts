import S3 from 'aws-sdk/clients/s3';

const state =
  process.env.NODE_ENV === 'production'
    ? {
        BUCKET: process.env.VUE_APP_S3_BUCKET_NAME!,
        bucket: new S3({
          accessKeyId: process.env.VUE_APP_S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.VUE_APP_S3_SECRET_ACCESS_KEY,
          region: process.env.VUE_APP_S3_REGION
        })
      }
    : {
        BUCKET: process.env.VUE_APP_S3_BUCKET_NAME_DEV,
        bucket: new S3({
          accessKeyId: process.env.VUE_APP_S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.VUE_APP_S3_SECRET_ACCESS_KEY,
          region: process.env.VUE_APP_S3_REGION
        })
      };
export default state;
