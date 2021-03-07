<template>
  <span>{{ sponsorName }}</span>
</template>
<script lang="ts">
import gql from 'graphql-tag';
import { ref } from '@vue/composition-api';

export default {
  name: 'SponsorName',
  props: {
    item: { required: true, type: Object }
  },
  setup(
    props,
    {
      root: {
        $apolloProvider: {
          defaultClient: { query }
        }
      }
    }
  ) {
    const sponsorName = ref('');
    const tokenId = props.item.tokenPool[0];
    query({
      query: gql`
        query Token($id: ObjectId!) {
          tokens(query: { _id: $id }) {
            owner_id
          }
        }
      `,
      variables: { id: tokenId }
    }).then(async ({ data }) => {
      const tokenOwnerId = data.tokens[0].owner_id;
      const sponsor = (
        await query({
          query: gql`
            query User($id: ObjectId!) {
              users(query: { _id: $id }) {
                _id
                firstName
                lastName
                sponsorName
              }
            }
          `,
          variables: { id: tokenOwnerId }
        })
      ).data.users[0];
      sponsorName.value = sponsor.sponsorName
        ? sponsor.sponsorName
        : `${sponsor.firstName} ${sponsor.lastName}`;
    });
    return { sponsorName };
  }
};
</script>
