<template>
  <div v-if="user" class="filepond-container">
    <v-img v-if="editable" class="rounded-circle" :width="size" :height="size">
      <file-pond
        name="test"
        label-idle="<span class='filepond--label-action'>Upload Picture</span>"
        accepted-file-types="image/jpeg, image/png"
        :files="myFiles"
        :image-preview-height="170"
        image-crop-aspect-ratio="1:1"
        :image-resize-target-width="200"
        :image-resize-target-height="200"
        style-panel-layout="compact circle"
        style-load-indicator-position="center bottom"
        style-button-remove-item-position="center bottom"
        accept="image/png, image/jpeg, image/gif"
        class="filepond"
        :server="server"
      >
      </file-pond>
    </v-img>
    <v-img v-else-if="src.length" class="rounded-circle" :width="size" :height="size" :src="src">
    </v-img>
    <v-avatar v-else class="navbar__initials" color="accent" bordered :width="size" :height="size"
      >{{ initials }}
    </v-avatar>
  </div>
</template>
<script lang="ts">
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import { useAuthGetters, useDbState, useDbGetters } from '@/store';
import { computed, ref, watchEffect } from '@vue/composition-api';

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform
);
interface FileType {
  source: string | null | undefined;
  options: {
    type: string;
  };
}
export default {
  components: {
    FilePond
  },
  props: {
    editable: {
      default: false,
      type: Boolean
    },
    size: {
      required: true,
      type: Number
    }
  },
  setup() {
    // init data
    const { functions } = useDbGetters(['functions']);
    const { user } = useDbState(['user']);
    const myFiles = computed(() => {
      const files: FileType[] = [];
      if (user.value?.profile)
        files.push({
          source: user.value?.profile.medium,
          options: {
            type: 'local'
          }
        });
      return files;
    });
    // mongo setup
    const userId = useAuthGetters(['getId']).getId;
    const {
      getObjectId: { value: getObjectId }
    } = useAuthGetters(['getObjectId']);
    const { collection } = useDbGetters(['collection']);
    const server = ref({
      process(fieldName, file, metadata, load, error, progress, abort) {
        const reader = new FileReader();
        reader.onload = (fileEvent: Event) => {
          const base64Encoded = fileEvent.target!.result;
          functions.value
            .callFunction('uploadProfileImage', userId.value, base64Encoded)
            .then(data => {
              load(data.medium); // load image to filepond from key
            })
            .catch(err => {
              // handle error
              error('Something went wrong');
            });
        };
        reader.readAsDataURL(file);
        return {
          abort: () => {
            abort();
          }
        };
      },
      load(source, load, error, progress, abort) {
        // Should request a file object from the server here
        const myRequest = new Request(source);
        fetch(myRequest)
          .then(response => {
            response.blob().then(myBlob => {
              const blob = myBlob.slice(0, myBlob.size, 'image/jpeg');
              load(blob);
            });
          })
          .catch(err => error('Something went wrong'));
        return {
          abort: () => {
            abort();
          }
        };
      },
      remove(source, load) {
        // delete profile images from user doc
        collection.value!('User').findOneAndUpdate(
          {
            _id: getObjectId
          },
          { $unset: { profile: '' } }
        );
        load();
      }
    });
    const src = ref('');
    watchEffect(() => {
      if (user.value?.profile) src.value = user.value?.profile.medium;
    });
    const initials = computed(
      () =>
        `${user.value?.firstName
          ?.toUpperCase()
          .charAt(0)} ${user.value?.lastName?.toUpperCase().charAt(0)}`
    );
    return {
      myFiles,
      server,
      user,
      src,
      initials
    };
  }
};
</script>
<style lang="scss" scoped>
.filepond--drop-label {
  color: #4c4e53;
}

.filepond--label-action {
  text-decoration-color: #babdc0;
}

.filepond--panel-root {
  background-color: #edf0f4;
}

/**
 * Page Styles
 */
html {
  padding: 20vh 0 0;
}

.filepond--root {
  width: 170px;
  margin: 0 auto;
}

.filepond-container {
  // margin: auto !important;
  // justify-content: center !important;
  // align-items: center !important;
  // padding: auto;
  // margin-left: auto !important;
  // margin-right: auto !important;
  // padding-left: auto !important;
  // padding-right: auto !important;
}

.rounded-circle {
  margin: auto;
  background-color: #dedede;
}

.navbar__initials {
  font-family: Raleway;
  font-weight: 900;
  letter-spacing: 0px;
}
</style>
