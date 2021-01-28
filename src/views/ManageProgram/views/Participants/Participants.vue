<template>
  <div class="participants__entire-body">
    <div class="participants__second-body">
      <div class="participants__title">Manage Participants</div>

      <!-- FILTER START -->
      <div class="participants__profile-btn2">
        <!-- <v-btn outlined icon><v-icon>mdi-filter-variant</v-icon>Filter</v-btn> -->
        <template>
          <v-dialog v-model="dialog" scrollable max-width="300px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="ma-1" color="grey" v-bind="attrs" rounded outlined v-on="on">
                <v-icon left>mdi-filter-variant</v-icon> Filter
              </v-btn>
            </template>

            <v-card>
              <v-card-title>Select Country</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 300px">
                <v-radio-group v-model="dialogm1" column>
                  <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                  <v-radio label="Bahrain" value="bahrain"></v-radio>
                  <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                  <v-radio label="Barbados" value="barbados"></v-radio>
                  <v-radio label="Belarus" value="belarus"></v-radio>
                  <v-radio label="Belgium" value="belgium"></v-radio>
                  <v-radio label="Belize" value="belize"></v-radio>
                  <v-radio label="Benin" value="benin"></v-radio>
                  <v-radio label="Bhutan" value="bhutan"></v-radio>
                  <v-radio label="Bolivia" value="bolivia"></v-radio>
                  <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
                  <v-radio label="Botswana" value="botswana"></v-radio>
                  <v-radio label="Brazil" value="brazil"></v-radio>
                  <v-radio label="Brunei" value="brunei"></v-radio>
                  <v-radio label="Bulgaria" value="bulgaria"></v-radio>
                  <v-radio label="Burkina Faso" value="burkina"></v-radio>
                  <v-radio label="Burma" value="burma"></v-radio>
                  <v-radio label="Burundi" value="burundi"></v-radio>
                </v-radio-group>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>

        <!-- Filtered Chips in the form of a button -->
        <v-btn class="ma-1" color="green" rounded outlined
          ><v-icon left>mdi-close</v-icon>Outcomes</v-btn
        >

        <v-btn class="ma-1" color="blue" rounded outlined
          ><v-icon left>mdi-close</v-icon>Participants</v-btn
        >

        <v-btn class="ma-1" color="red" rounded outlined
          ><v-icon left>mdi-close</v-icon>Projects</v-btn
        >

        <!-- <v-btn class="ma-2" color="green" outlined>
          <v-icon left>mdi-close</v-icon>
          Location
        </v-btn> -->

        <!-- <v-chip class="manage__pills" color="#bdbdbd">
          <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>

        <v-chip class="manage__pills" color="#bdbdbd">
          <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="manage__pills" color="#bdbdbd">
          <v-icon class="manage__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="manage__pills--outline"></v-chip> -->

        <!-- Auto-Join Switch -->
      </div>

      <!-- FILTER END -->

      <!-- <div class="participants__profile-btn">
        <v-chip class="participants__pills" color="#bdbdbd">
          <v-icon class="participants__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>

        <v-chip class="participants__pills" color="#bdbdbd">
          <v-icon class="participants__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="participants__pills" color="#bdbdbd">
          <v-icon class="participants__close" x-small color="#F2F2F2">mdi-close</v-icon>
        </v-chip>
        <v-chip class="participants__pills--outline"></v-chip>
      </div> -->

      <div class="participants__manage-bar">
        <!-- Auto-Join Switch -->

        <v-row class="participants__auto-join"
          ><v-icon class="ma-3" large color="yellow">mdi-lightning-bolt</v-icon
          ><v-switch v-model="switch1" color="grey" inset :label="`Auto-Join`"></v-switch>
        </v-row>

        <!-- <v-switch
          v-model="switch1"
          blue
          inset
          :label="`Switch 1: ${switch1.toString()}`"
        ></v-switch> -->

        <v-row class="participants__toggle"
          ><v-btn class="ma-1" x-small color="grey" depressed outlined>Approved</v-btn
          ><v-btn class="ma-1" x-small color="grey" depressed outlined>Unapproved</v-btn
          ><v-btn class="ma-1" x-small color="grey" depressed outlined>Denied</v-btn></v-row
        >

        <IndexTable v-slot="{ indexedItems, indexHandler }" :items="items">
          <v-data-table
            :headers="header"
            :items="indexedItems"
            sort-by="index"
            @current-items="indexHandler"
          >
            <template v-slot:item.approve>
              <v-btn small class="participants__approve" depressed color="green" :ripple="false">
                <v-icon color="#F2F2F2"> mdi-check </v-icon>
              </v-btn>
            </template>
            <template v-slot:item.deny>
              <v-btn
                small
                outlined
                class="participants__approve"
                depressed
                color="red"
                :ripple="false"
              >
                <v-icon color="red">mdi-close</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </IndexTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import IndexTable from '@/components/IndexTable.vue';
import { items, HEADER } from './const';

export default {
  name: 'Participants',
  components: {
    IndexTable
  },
  data() {
    return {
      dialogm1: '',
      dialog: false,
      switch1: true,
      switch2: false
    };
  },
  setup() {
    return { header: ref(HEADER), items };
  }
};
</script>

<style lang="scss">
.v-main__wrap {
  background: white;
  color: black;
}

.participants {
  &__entire-body {
    display: flex;
    height: 100%;
  }

  &__second-body {
    width: 100%;
  }

  &__profile-btn2 {
    // display: flex;
    // margin-top: 44px;
    // padding-left: 56px;
    margin-bottom: 50px;
    display: flex;
    margin-top: 28px;
    padding-left: 56px;
  }

  &__title {
    margin-left: 56px;
    margin-top: 44px;
    font-family: Raleway;
    font-size: 33px;
    font-weight: 800;
  }

  &__auto-join {
    // margin-top: 20px;
    margin-bottom: 40px;
  }

  &__toggle {
    margin-left: 0px;
    margin-bottom: 10px;
  }

  &__pills {
    margin-right: 9px;
    display: flex;
    align-items: center;
    width: 85px;
    border-radius: 25px;
    background: #bdbdbd;
    &.v-chip {
      padding: 0px 0px;
      &.v-size--default {
        height: 20px;
      }
    }
    &--outline {
      width: 85px;
      border-radius: 25px;
      &.theme--light {
        &.v-chip {
          background: white;
          padding: 0px 0px;
          border: 1px dashed #828282;
          &.v-size--default {
            height: 20px;
          }
          &:not(.v-chip--active) {
            background: transparent;
          }
        }
      }
    }
  }

  &__close {
    margin-left: 7.94px;
  }

  &__manage-bar {
    margin-left: 56px;
    margin-bottom: 22px;
    margin-right: 56px;
  }

  &__index-num {
    display: flex;
    flex-basis: 1;
    width: 35px;
    height: 35px;
  }

  &__full-name {
    display: flex;
    flex-basis: 1;
    margin-left: 38px;
    align-items: center;
    width: 13.92%;
  }

  &__approve {
    &.v-btn {
      width: 100%;
      border-radius: 10px;
    }
  }

  &__deny {
    &.v-btn {
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>
