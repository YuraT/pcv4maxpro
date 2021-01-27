<template>
  <div style="width: 100%">
    <div v-if="tile" class="tile">
      <div class="pc-program-card">
        <div class="pc-program-card__image">
          <!-- <v-img
            src="https://picsum.photos/510/300?random"
            class="pc-program-card__completed"
          ></v-img> -->
        </div>
        <div class="pc-program-card__content">
          <h5 class="pc-program-card__title">Program Name</h5>
          <!-- <a href="#" class="pc-program-card__button w-button">Results</a> -->

          <v-btn outlined light class="pc-program-card__button w-button">Results</v-btn>
        </div>
      </div>
    </div>
    <div v-else class="pc-program-card">
      <div class="pc-program-card__image">
        <v-img src="https://picsum.photos/510/300?random" class="pc-program-card__image"></v-img>
      </div>
      <div class="pc-program-card__content">
        <h5 class="pc-program-card__title">Program Name</h5>
        <h4 class="pc-program-card__progress">75%</h4>
        <div class="pc-program-card__actions">
          <!-- <div class="pc-program-card__progress-bar"> -->

          <v-progress-linear class="green lighten-1" rounded green height="9"></v-progress-linear>
          <!-- </div> -->
          <div class="pc-program-card__outline">
            <v-btn outlined light class="pc-program-card__button w-button">Checkout</v-btn>
          </div>
          <!-- <a href="#" class="pc-program-card__button w-button">Checkout</a> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.pc-program-card {
  display: flex;
  border: 1px solid black;
  &__content {
    width: 100%;
    margin-top: 0px;
    padding: 19px 29px 0px 23px;
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
  }
  &__image {
    width: 100%;
    height: 210px;
    max-width: 300px;
    min-width: 0px;
    background-color: #dbdbdb;
    // border-right: 1px solid black;
  }
  &__title {
    font-size: 22px;
    line-height: 30px;
    font-weight: 800;
    text-align: left;
    margin-bottom: 22px;
    font-family: 'Raleway';
  }

  &__progress {
    font-size: 32px;
    line-height: 15px;
    font-family: 'Raleway';
    font-weight: 800;
    color: #6fba7f;
  }

  &__actions {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    // margin-top: 18px;
    padding-top: 28px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  &__button {
    width: 200px;
    min-height: 40px;
    margin-top: 18px;
    padding-right: 40px;
    padding-left: 40px;
    border: 1px solid #000;
    border-radius: 10px;
    background-color: #fff;
    color: #000000;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    font-family: Raleway;
    font-weight: 900;
    &:hover {
      color: #fff;
      background-color: #404142;
    }
  }
  &__progress-bar {
    height: 10px;
  }
}

.tile {
  .pc-program-card {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 200px;
    // margin-top: 33px;
    border: 1px solid #000;
    border-radius: 1px;

    &__image {
      max-width: 100%;
      height: 200px;
      background-color: #dbdbdb;
    }
    &__completed {
      width: 1220px;
    }
    &__content {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      height: 100%;
      max-height: 175px;
      min-height: 150px;
      padding-bottom: 25px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
    &__title {
      // margin-top: 40px;
      // font-size: 30px;
      // line-height: 30px;
      // font-weight: 700;
      text-align: center;

      font-size: 22px;
      line-height: 30px;
      font-weight: 800;
      font-family: 'Raleway';
    }
  }
}
@media screen and (max-width: 991px) {
  .tile .pc-program-card {
    max-width: 100%;
  }
}
@media screen and (max-width: 767px) {
  .pc-program-card__image {
    height: 100%;
    min-height: 200px;
  }
}
@media screen and (max-width: 479px) {
  .pc-program-card__image {
    display: none;
  }
  .pc-program-card__button {
    max-height: 100%;
  }
}
</style>
<script lang="ts">
export default {
  props: {
    tile: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {};
  }
};
</script>
