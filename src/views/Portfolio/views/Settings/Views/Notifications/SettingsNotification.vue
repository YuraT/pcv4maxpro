<template>
  <div>
    <div class="my-settings__title">Sponsor</div>
    <!-- <v-checkbox label="Turn on email notifications"></v-checkbox>
    <v-checkbox label="Get email updates and announcements"></v-checkbox> -->
    <div class="d-flex justify-center flex-column align-center">
      <div ref="loader" class="my-id__wrapper" style="width: 100%">
        <!-- <validation-provider v-slot="{ errors }" slim rules="required"> -->
        <v-text-field
          v-model="sponsorName"
          :error-messages="errors"
          label="Sponsor Name"
          hint="This is your public display name"
          outlined
        ></v-text-field>
        <!-- </validation-provider> -->
        <Loading v-slot="{ loading: saving, process }" :callback="save">
          <v-btn :disabled="invalid" :loading="saving" outlined depressed x-large @click="process"
            >Save</v-btn
          >
        </Loading>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from '@vue/composition-api';
import { GetterTypes } from '@/store/modules/auth/getters';
import { useDbActions, useAuthGetters, useDbState } from '@/store';
import { User } from '@/generated/graphql';
import Loading from '@/components/Loading.vue';

export default {
  name: 'Settings',
  components: { Loading },
  setup() {
    const { getObjectId } = useAuthGetters([
      GetterTypes.getUser,
      GetterTypes.getObjectId,
      GetterTypes.getId
    ]);
    const { user: userState } = useDbState(['user']);
    const sponsorName = ref(
      userState.value!.sponsorName
        ? userState.value!.sponsorName
        : `${userState.value!.firstName} ${userState.value!.lastName}`
    );
    const { update } = useDbActions(['update']);
    async function save() {
      await update({
        collection: 'User',
        payload: {
          sponsorName: sponsorName.value
        } as User,
        filter: { _id: getObjectId.value },
        options: { upsert: true }
      });
    }

    return { save, sponsorName };
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
