<template>
  <v-toolbar depressed flat color="primary" height="75">
    <a href="https://www.pilotcity.com/"
      ><img src="@/assets/Pilotcity_logo.png" class="nav__logo" />
    </a>

    <v-toolbar-title
      ><span class="text-h5 signup__header font-weight-black text-sm-h4"></span
    ></v-toolbar-title>

    <v-progress-linear
      v-if="loading"
      :active="loading"
      :indeterminate="loading"
      absolute
      bottom
      color="blue"
    ></v-progress-linear>

    <v-spacer></v-spacer>

    <div class="nav__actions">
      <v-btn
        v-if="!user"
        depressed
        large
        rounded
        color="white"
        outlined
        :to="{ name: 'login' }"
        :ripple="false"
      >
        <span class="font-weight-black">Login</span>
      </v-btn>
      <v-btn
        v-if="!user"
        class="signup__signupbutton"
        depressed
        large
        rounded
        color="#828282"
        :ripple="false"
        :to="{ name: 'signup' }"
      >
        <span class="font-weight-black">Signup</span>
      </v-btn>

      <!-- <v-btn color="#404142" text rounded large
        ><v-icon color="white" size="40">mdi-plus</v-icon></v-btn
      > -->

      <!-- <v-btn
        v-if="user"
        class="mr-3 ml-3 pr-10 pl-10"
        large
        depressed
        rounded
        outlined
        color="white"
        :ripple="false"
        @click="logout"
      >
        <span class="font-weight-black">Explore</span>
      </v-btn> -->

      <v-btn
        v-if="user"
        class="mr-3 ml-3"
        large
        depressed
        rounded
        outlined
        color="white"
        :ripple="false"
        @click="$router.push({ name: 'portfolio' })"
      >
        <span class="font-weight-black">My Portfolio</span>
      </v-btn>

      <!-- <v-btn color="#404142" rounded text
        ><v-badge
          class="ml-1 mr-1"
          :content="10"
          :value="10"
          color="purple lighten-2"
          overlap
          offset-x="15"
          offset-y="20"
          ><v-icon color="white" large>mdi-bell</v-icon>
        </v-badge></v-btn
      > <v-btn
        v-if="getUser"
        class="mr-3 ml-3"
        large
        depressed
        rounded
        outlined
        color="white"
        :ripple="false"
        @click="logout"
      >
        <span class="font-weight-black">Logout</span>
      </v-btn> -->
      <v-menu v-if="user" offset-y :ripple="false">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="user"
            rounded
            large
            class="navbar__avatar"
            color="primary"
            dark
            depressed
            v-bind="attrs"
            v-on="on"
          >
            <Profile :size="45" />
          </v-btn>
        </template>
        <v-btn class="navbar__logout" color="primary" dark depressed @click="logout">Logout</v-btn>
      </v-menu>
    </div>
  </v-toolbar>
</template>
<style lang="scss">
.navbar__logout {
}
.nav__logo {
  width: 40px;
  height: 50px;
  margin-left: 20px;
}

.navbar__avatar {
}

.nav__profile {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 0px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  background-color: #828282;
}

.nav__actions {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  .signup__signupbutton {
    margin-left: 20px;
    margin-right: 25px;
  }
}
</style>
<script lang="ts">
import { useAuthActions, useDbState } from '@/store';
import { onLogout } from '@/vue-apollo';
import Profile from '@/components/Profile.vue';

export default {
  components: {
    Profile
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(_props, ctx) {
    // Auth configuration
    const { logout: logoutProcess } = useAuthActions(['logout']);
    const { user } = useDbState(['user']);
    async function logout() {
      await logoutProcess();
      await onLogout();
      ctx.root.$router.push({ name: 'login' });
    }
    // Global Tooling for linear progression
    return {
      logout,
      user
    };
  }
};
</script>

<style lang="scss"></style>
