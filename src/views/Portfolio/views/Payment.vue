<template>
  <ValidationObserver v-slot="{}">
    <div class="sponsor__container">
      <v-alert v-if="invoiceState.state === 'error'" type="error">{{
        invoiceState.message
      }}</v-alert>
      <div class="sponsor__details">
        <div class="sponsor__details-avatar">
          <Profile :size="60" />
        </div>

        <div class="sponsor__details-namecard">
          <validation-provider v-slot="{ errors }" rules="required">
            <v-text-field
              v-model="sponsorName"
              :error-messages="errors"
              height="60"
              outlined
              rounded
              label="Sponsor"
              class="sponsor__details-name font-weight-bold"
              hint="Choose your public display name"
              :placeholder="`${user.firstName} ${user.lastName}`"
            ></v-text-field>
          </validation-provider>
        </div>

        <div class="sponsor__pay-card">
          <v-btn x-large rounded outlined text :disabled="!selectedProduct.length" @click="checkout"
            >Pay by Card</v-btn
          >
        </div>
        <div class="sponsor__pay-card">
          <v-btn
            x-large
            rounded
            outlined
            text
            :disabled="!selectedProduct.length"
            @click="sendInvoice"
            >Pay by Invoice</v-btn
          >
        </div>
      </div>

      <div class="sponsor__program-menu">
        <v-card
          v-for="option in purchaseOptions"
          :key="option.title"
          elevation="0"
          :color="option.color"
          dark
          class="mb-3"
        >
          <v-card-title class="landing__menu-title">
            <div class="sponsor__option-title">{{ option.title }}</div>
            <div class="sponsor__option-unit">
              <v-chip color="white" outlined>{{ option.unitLabel }}</v-chip>
            </div>
            <div class="sponsor__option-price">${{ option.price / 100 }}</div>

            <!-- <v-checkbox v-model="selectedProduct" :label="`$${option.price / 100}`">
              <template v-slot:label>
                <span class="sponsor__option-checkbox"></span>
              </template>
            </v-checkbox> -->
            <v-text-field
              v-model="option.quantity"
              class="sponsor__quantity-check"
              min="0"
              outlined
              x-large
              label="Quantity"
              type="number"
              hide-details
            ></v-text-field>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-subtitle>{{ option.desc }}</v-card-subtitle>
          <!-- <v-card-actions>
            <v-radio-group v-model="selectedProduct" multiple class="sponsor__menu-radio"
                    ><v-radio
                      :value="option"
                      class="sponsor__menu-radio"
                      :label="`$${option.price / 100}`"
                    ></v-radio
                  ></v-radio-group>
          </v-card-actions> -->
        </v-card>
      </div>
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import { computed, ref, Ref } from '@vue/composition-api';
import { useDbActions, useStripeActions, useDbState } from '@/store';
import Profile from '@/components/Profile.vue';
import { defer } from 'rxjs';
import { retry } from 'rxjs/operators';

export default {
  name: 'Payment',
  components: {
    Profile
  },
  setup(_, ctx) {
    const { user } = useDbState(['user']);
    const sponsorName = ref('');
    const { getProductInfos } = useDbActions(['getProductInfos']);
    const PRICE_IDS =
      process.env.NODE_ENV === 'development'
        ? [
            'price_1HXAFALnkQGEgDQnGsjqbuuM', // student
            'price_1HXABLLnkQGEgDQnwzzt63Np', // family
            'price_1HXA9ZLnkQGEgDQn9uaE7Hm2', // group
            'price_1HXAD3LnkQGEgDQnqxQabHZO', // class
            'price_1HXACELnkQGEgDQnWpGByUE0' // teacher
          ]
        : [
            'price_1HXEkkLnkQGEgDQnedtEFh3p',
            'price_1HXEkcLnkQGEgDQnVKGG37Yj',
            'price_1HXEkVLnkQGEgDQnY65rauZj',
            'price_1HXEkhLnkQGEgDQnI5LGwaoR',
            'price_1HXEkfLnkQGEgDQntVYb3iFX'
          ];
    const ColorCode = {
      'Per Student': 'green',
      'Per Family': 'orange',
      'Per Group': 'purple',
      'Per Class': 'blue',
      'Per Teacher': 'pink'
    };
    const purchaseOptions: Ref<any[]> = ref([]);
    getProductInfos({ priceId: PRICE_IDS }).then(result => {
      purchaseOptions.value = result.body.map(res => ({
        title: res.product.name,
        desc: res.product.description,
        priceId: res.price.id,
        price: res.price.unit_amount,
        color: ColorCode[res.product.name],
        quantity: 0,
        unitLabel: res.product.unit_label
      }));
    });
    const selectedProduct = computed(() => purchaseOptions.value.filter(opt => opt.quantity));
    const { createCheckoutSession, createInvoice } = useStripeActions([
      'createCheckoutSession',
      'createInvoice'
    ]);
    const invoiceState = ref({
      state: '',
      message: ''
    });
    const checkout = async () => {
      defer(() =>
        createCheckoutSession({
          lineItems: selectedProduct.value,
          cancelUrl: 'http://pilotcity.com/sponsor'
        })
      )
        .pipe(retry(3))
        .subscribe(result => {
          if (result.error) {
            invoiceState.value.state = 'error';
            invoiceState.value.message = result.error.message!;
          }
        });
    };
    // Handle Invoicing

    const sendInvoice = async () => {
      try {
        const invoice = await createInvoice({ lineItems: selectedProduct.value });
        // eslint-disable-next-line no-unreachable
        if (invoice?.openInvoice?.hosted_invoice_url)
          window.location.href = invoice?.openInvoice?.hosted_invoice_url;
        ctx.root.$router.push(invoice?.openInvoice?.hosted_invoice_url);
        invoiceState.value.state = 'success';
        invoiceState.value.state = 'success';
      } catch (err) {
        invoiceState.value.state = 'error';
        invoiceState.value.message = err;
      }
      // handle invoice logic
    };
    return {
      sponsorName,
      purchaseOptions,
      checkout,
      selectedProduct,
      sendInvoice,
      invoiceState,
      user
    };
  }
};
</script>

<style lang="scss">
.sponsor {
  &__container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding-left: 6%;
    padding-right: 6%;
  }

  &__pay-card {
    // margin-right: 3%;
    margin-left: 25px;
    margin-top: 5px;
    // margin-right: 10px;
    // align-items: center;
    // justify-content: center;
  }

  &__menu-title {
  }

  &__option-title {
    font-family: Raleway;
    font-weight: 800;
    font-size: 30px;
    color: #ffffff;
    margin-right: 20px;
    // margin-right: auto;
  }

  &__option-unit {
    font-family: Raleway;
    font-weight: 700;
    // font-size: 30px;
    // margin-right: auto;
    margin-right: 20px;
  }

  &__option-price {
    font-weight: 300;
    font-size: 30px;
    color: #ffffff;
    margin-right: auto;
  }

  &__option-title-checkbox {
    font-family: Raleway;
    font-weight: 800;
    font-size: 25px;
  }

  &__details {
    flex-direction: row;
    display: flex;
    margin-top: 7px;
    margin-bottom: 50px;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
  }

  &__details-namecard {
    margin-left: 25px;

    flex-direction: column;
    display: flex;
  }

  &__details-name {
    font-family: Raleway;
    font-size: 25px;
  }

  &__details-anonymous {
    font-family: Raleway;
    font-weight: 700;
  }

  &__quantity-check {
    margin-left: auto;
    max-width: 100px;
    font-size: 25px;
    // justify-content: flex-end;
    // align-items: flex-end;
    // margin-top: auto;
    // margin-bottom: auto;
  }

  &__timeline {
    box-shadow: none !important;
  }

  &__timeline-step {
    font-family: Raleway;
    font-weight: 700;
    color: #404142;
    font-size: 20px;
  }

  &__program-menu {
    display: grid;
    grid-template-columns: repeat(1, 80%);
    grid-template-rows: repeat(5, 20%);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    margin-bottom: 150px;
    justify-content: center;
  }

  &__program-menu-card-radio {
    justify-content: center;
  }

  &__menu-radio {
    margin-left: 3px;
  }

  &__support-card {
    margin-top: 25px;
    margin-bottom: 35px;
  }
}
</style>
