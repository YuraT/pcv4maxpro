<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <div class="my-settings__title">General</div>
    <div class="d-flex justify-center flex-column align-center">
      <div ref="loader" class="my-id__wrapper" style="width: 100%">
        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field v-model="firstName" :error-messages="errors" outlined label="First Name">
          </v-text-field>
        </validation-provider>

        <validation-provider v-slot="{ errors }" rules="required">
          <v-text-field v-model="lastName" :error-messages="errors" label="Last Name" outlined>
          </v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-text-field
            v-model="phoneNumber"
            v-mask="'(###) ###-####'"
            :error-messages="errors"
            label="Mobile Phone Number"
            outlined
          ></v-text-field>
        </validation-provider>

        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-select
            v-model="userTypes"
            :error-messages="errors"
            :items="AVAILABLE_IDS"
            chips
            label="Citizen Type"
            multiple
            outlined
          ></v-select>
        </validation-provider>
        <Loading v-slot="{ loading: saving, process }" :callback="save">
          <v-btn :disabled="invalid" :loading="saving" outlined depressed x-large @click="process"
            >Save</v-btn
          >
        </Loading>
      </div>
    </div>
  </ValidationObserver>
</template>
<script lang="ts">
import { Ref, reactive, ref, toRefs } from '@vue/composition-api';
import { useAuthGetters, useDbActions, useDbState } from '@/store';
import { GetterTypes } from '@/store/modules/auth/getters';
import { PropType } from 'vue';
import Loading from '@/components/Loading.vue';
import { User } from '@/generated/graphql';
import { CITIZEN_TYPES } from '../../../../const';

const {
  getObjectId
  // getId: { value: getId }
} = useAuthGetters([GetterTypes.getUser, GetterTypes.getObjectId, GetterTypes.getId]);

interface TypeItem {
  text: string;
  value: string;
}

export default {
  name: 'SettingsName',
  components: {
    Loading
  },
  props: {
    value: {
      type: Array as PropType<TypeItem[]>,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const AVAILABLE_IDS = ref(CITIZEN_TYPES);

    const loader: Ref<ReturnType<typeof Loading['setup']> | null> = ref(null);

    const { user: userState } = useDbState(['user']);
    // Invoke Query
    const user = reactive({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      userTypes: []
    });
    Object.keys(user).forEach(key => {
      user[key] = userState.value![key];
    });
    // Upload Functionality
    const { update } = useDbActions(['update']);
    async function save() {
      await update({
        collection: 'User',
        payload: {
          _id: getObjectId.value,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          userTypes: user.userTypes
        } as User,
        filter: { _id: getObjectId.value },
        options: { upsert: true }
      });
      emit('input', user.userTypes);
    }

    return { save, AVAILABLE_IDS, ...toRefs(user), loader };
  }
};
</script>

<style lang="scss">
.my-settings {
  &__container {
    margin-top: 75px;
    display: flex;
    flex-direction: row;
    padding-left: 12%;
    padding-right: 12%;
  }
  &__wrapper {
    &-right {
      flex-grow: 1;
      display: flex;
      justify-content: left;
      padding-left: 50px;
    }
  }

  &__content {
    width: 70%;
  }
  &__title {
    font-family: Raleway;
    font-size: 30px;
    color: #000000;
    font-weight: 800;
    padding-bottom: 50px;
  }

  &__subtitle {
    font-family: Raleway;
    font-size: 22px;
    color: #000000;
    font-weight: 700;
    margin-bottom: 25px;
  }

  &__divider {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  &__save {
    margin-top: 30px;
  }
}
</style>
