<template>
  <validation-observer slim>
    <div class="confirmemail__background">
      <div class="confirmemail__box accent">
        <div :class="`${color}--text`" class="confirmemail__title text-h4 font-weight-black">
          <div>{{ displayMessage }}</div>
        </div>
        <div v-if="color === 'red'" class="mt-8 d-flex flex-column justify-center">
          <validation-provider v-slot="{ errors }" slim rules="email">
            <v-text-field
              v-model="starterEmail"
              :error-messages="errors[0]"
              light
              outlined
              label="Email"
            ></v-text-field>
          </validation-provider>
          <div class="text-h6 font-weight-bold">Click to resend confirmation email</div>
          <v-btn class="mt-4" large depressed dark @click="resendEmailConfirmation">Resend</v-btn>
        </div>
      </div>
    </div>
  </validation-observer>
</template>
<script lang="ts">
import { ref, onMounted } from '@vue/composition-api';
import { useAuthActions, useToolActions } from '@/store';

export default {
  name: 'ConfirmEmail',
  props: {
    token: {
      type: String,
      default: ''
    },
    tokenId: {
      type: String,
      default: ''
    }
  },
  setup(props, vm) {
    // *Confirm Signup
    const color = ref('blue');
    const email = ref('');
    const confirmationError = ref(false);
    const displayMessage = ref('Hang on while we verify your email');
    const resendConfirmation = async () => {
      const { resendEmailConfirmation } = useAuthActions(['resendEmailConfirmation']);
      await resendEmailConfirmation(email.value);
    };
    const verifyUser = async () => {
      const { confirmUser } = useAuthActions(['confirmUser']);
      try {
        await confirmUser({ token: props.token as string, tokenId: props.tokenId as string });
      } catch {
        confirmationError.value = true;
      }
    };
    const { setLinearLoader } = useToolActions(['setLinearLoader']);
    onMounted(async () => {
      await setLinearLoader({ func: verifyUser });
      if (confirmationError.value) {
        color.value = 'red';
        displayMessage.value = 'We could not verify your email at this time';
      } else {
        color.value = 'green';
        displayMessage.value = 'Your email has been verified, you will be redirected shortly';
        vm.root.$router.push({ name: 'login' });
      }
    });

    return {
      confirmationError,
      displayMessage,
      color,
      email,
      resendConfirmation
    };
  }
};
</script>

<style lang="scss">
.confirmemail {
  &__background {
    height: 100%;
    background-color: #4f4f4f;
    display: flex;
    justify-content: center;
  }

  &__box {
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 20%;
    background: #c4c4c4;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 25px;
  }

  &__title {
    display: flex;
    flex: column;
    color: #3c9dcd;
    margin-top: 15%;
    width: 70%;
    text-align: center;
  }
}
</style>
