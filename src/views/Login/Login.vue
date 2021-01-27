<template>
  <div class="login__background">
    <Loading v-slot="{ loading, process }" :callback="login" linear-loader>
      <div class="login__body">
        <div class="login__title text-h4 font-weight-black">
          <span>Welcome back.</span>
        </div>
      </div>
      <div class="login__inputs">
        <validation-observer v-slot="{ invalid }" ref="observer" slim class="login__emailalign">
          <div class="login__email text-subtitle-2">Email</div>
          <validation-provider v-slot="{ errors }" ref="provider" rules="required|email">
            <v-text-field
              ref="emailInput"
              v-model="email"
              class="login__input"
              single-line
              outlined
              full-width
              label="Email"
              color="white"
              dark
              :error-messages="errors"
            ></v-text-field>
          </validation-provider>

          <div class="login__password text-subtitle-2">Password</div>
          <validation-provider v-slot="{ errors }" slim rules="required">
            <v-text-field
              ref="passwordInput"
              v-model="password"
              class="login__input"
              type="password"
              label="Password"
              toggle
              single-line
              outlined
              full-width
              dark
              :error-messagees="errors"
              @keyup.enter="process"
            >
            </v-text-field>

            <!-- <div class="login__forgotpassword">
              <i>
                <a class="login__forgotlink" href="password-reset"> Forgot Password</a>
              </i>
            </div> -->
          </validation-provider>

          <v-btn
            ref="loginBtn"
            class="login__next text-h5 font-weight-black"
            depressed
            color="blue"
            x-large
            :ripple="false"
            :disabled="invalid"
            :loading="loading"
            @click="process"
            >Login</v-btn
          >
          <v-alert v-if="error" class="login__alert" type="error">{{ error }}</v-alert>
          <div class="login__newaccount">
            <i>
              <a class="login__signuplink" href="signup"> No account yet? Signup.</a>
            </i>
          </div>
        </validation-observer>
      </div>
    </Loading>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from '@vue/composition-api';
import { ActionTypes } from '@/store/modules/auth/actions';
import { useAuthActions, useDbState } from '@/store';
import Loading from '@/components/Loading.vue';
import { onLogin } from '@/vue-apollo';

export default {
  components: {
    Loading
  },
  beforeRouteEnter(to, from, next) {
    const { user } = useDbState(['user']);
    if (!user.value) next();
    else next({ name: 'portfolio' });
  },
  setup(_props, { root: { $router } }) {
    const state = reactive({
      email: '',
      password: '',
      error: ''
    });
    const { loginUser } = useAuthActions([ActionTypes.loginUser]);
    async function login() {
      try {
        const user = await loginUser({ email: state.email, password: state.password });
        await onLogin(user!.accessToken);
        $router.push({ name: 'setup' });
      } catch (err) {
        if (err.statusCode === 401)
          state.error = 'That email and password combination does not exist';
        else state.error = err;
      }
    }
    return { ...toRefs(state), login };
  }
};
</script>

<style lang="scss">
.login {
  &__background {
    height: 100%;
    background-color: #4f4f4f;
  }
}

.login {
  &__navbar {
    display: flex;
  }

  &__image {
    flex-basis: 0;
    width: 35px;
    height: 42px;
    margin: 10.5px 20px 10.5px 40px;
  }
  &__header {
    flex-basis: 0;
    flex-grow: 1;
    color: #f2f2f2;
    display: flex;
    align-items: center;
  }
  // &__actions {
  // }
  &__button {
    margin-top: 11px;
    & .v-btn__content {
      padding: 10px 17px;
    }
  }
  &__signup {
    &.theme--light.v-btn {
      //access class
      color: #ffffff;
    }
    & .v-btn__content {
      padding: 10px 17px;
    }
    margin: 11px 40px 12px 33px;
  }

  &__hamburger {
    margin-right: 40px;
  }
}

.login {
  &__body {
    display: flex;
    justify-content: center;
  }
  &__title {
    color: #3c9ccc;
    margin-top: 165px;
    margin-bottom: 30px;
    font-family: Raleway;
  }
}

.login {
  &__inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    & .v-text-field--outlined > .v-input__control > .v-input__slot {
      background: white;
    }
    & .v-text-field .v-text-field__details {
      display: none;
    }
  }
  &__emailalign {
    width: 100%;
    max-width: 349.11px;
  }
  &__email {
    display: inherit;
    margin-top: 10px;
    margin-bottom: 4.5px;
    color: #ffffff;
  }
  &__input {
    // color: #d4d4d4;
  }
  &__passwordalign {
    width: 100%;
    max-width: 349.11px;
  }
  &__password {
    display: inherit;
    margin-bottom: 4.5px;
    color: #ffffff;
    margin-top: 10%;
  }

  &__forgotpassword {
    color: #ffff;
    text-align: right;
    & a.login__forgotlink {
      font-size: 13px;
      color: #ffffff;
    }
  }

  &__newaccount {
    color: #ffffff;
    margin-top: 4%;
    text-align: center;

    & a.login__signuplink {
      margin-top: 4.5%;
      font-size: 13px;
      color: #ffffff;
    }
  }
}

.login {
  &__next {
    & .v-btn__content {
      color: white;
    }
    &.v-btn:not(.v-btn--round).v-size--default {
      height: 50px;
    }
    width: 100%;
    max-width: 349.11px;
    margin-top: 20px;
  }

  &__alert {
    margin-top: 25px;
    font-size: 11.5px !important;
  }
}

.login__inputs .v-text-field--outlined > .v-input__control > .v-input__slot {
  background-color: transparent;
}

@media only screen and (max-width: 600px) {
}
</style>
