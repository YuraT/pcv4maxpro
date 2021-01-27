<template>
  <div>
    <div class="my-settings__subtitle">Password</div>

    <!-- <validation-provider v-slot="{ errors }" rules="required">
      <v-text-field
        v-model="currentPasssword"
        :error-messages="errors"
        outlined
        label="Current Password"
      >
      </v-text-field>
    </validation-provider>

    <validation-provider v-slot="{ errors }" rules="required">
      <v-text-field v-model="newPassword" :error-messages="errors" outlined label="New Password">
      </v-text-field>
    </validation-provider> -->

    <v-btn outlined depressed x-large href="password-reset">Forgot Password</v-btn>
  </div>
</template>
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
<script lang="ts">
import {} from '@vue/composition-api';

export default {
  name: 'Settings'
};
</script>
