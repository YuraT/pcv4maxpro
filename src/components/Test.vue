<template>
  <div class="home">
    <div class="home__setup-mode">
      <v-btn small depressed dark color="#dedede">Preview Mode</v-btn>
      <!-- <v-btn small depressed dark color="orange">Setup Mode</v-btn> -->
    </div>
    <!-- <span class="text-h1 font-weight-black"> THIS IS AN EMPTY PAGE</span> -->
  </div>
</template>
<style lang="scss">
.home {
  border: 12px solid #dedede;
  // border: 12px solid orange;
  width: 100%;
  height: 100vh;
  // display: flex;
  // justify-content: center;
  // & span {
  //   text-align: center;
  // }
  &__setup-mode {
    text-align: center;
    margin: 25px;
  }
}
</style>
<script>
// @ is an alias to /src
export default {
  name: 'Test'
};
</script>
