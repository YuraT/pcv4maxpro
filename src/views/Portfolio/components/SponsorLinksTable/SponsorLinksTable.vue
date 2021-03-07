<template>
  <div class="balance-view__entire-body">
    <v-data-table :headers="header" :items="items">
      <template #[`item.sponsor`]="{ item }"><SponsorName :item="item" /></template>
      <template #[`item.shareCode`]="{ item }">
        <v-row class="pl-3 align-center">
          {{ `https://www.pilotcity.com/sponsor/${item.shareCode}` }}
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                small
                class="ml-3"
                v-on="on"
                @click="copy(`https://www.pilotcity.com/sponsor/${item.shareCode}`)"
              >
                <v-icon small>mdi-content-copy</v-icon>
              </v-btn>
            </template>
            <span>Copy link</span>
          </v-tooltip>
        </v-row>
      </template>
      <template #[`item.uses`]="{ item }"> {{ formatUses(item) }}</template>
      <template #[`item.revoke`]="{ item }">
        <v-btn color="red" outlined depressed small @click="$emit('revoke', item.shareCode)"
          ><v-icon small left>mdi-delete</v-icon>Delete</v-btn
        >
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { useDbState } from '@/store';
import HEADER from './const';
import SponsorName from './SponsorName.vue';

export default {
  name: 'SponsorLinksTable',
  components: { SponsorName },
  props: {
    items: { required: true, type: Array },
    sponsors: { required: true, type: Array }
  },
  setup() {
    const formatUses = item => {
      const claims = Object.keys(item.claimedBy).length;
      const total = Object.keys(item.tokenPool).length;
      return `${claims} / ${total}`;
    };

    const copy = str => {
      navigator.clipboard.writeText(str);
    };
    return { header: ref(HEADER), user: useDbState(['user']).user, formatUses, copy };
  }
};
</script>

<style lang="scss">
.balance-view {
  &__entire-body {
    width: 100%;
    padding: 0px 10px 0px 10px;
  }
  &__pending {
    .v-btn__content {
      color: white;
    }
    &.v-btn {
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>
