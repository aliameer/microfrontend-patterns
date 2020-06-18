<template>
  <span>
    <button
      class="btn btn-link nav-link dropdown-toggle"
      type="button"
      data-toggle="dropdown"
    >
      <svg
        id="i-cart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
        <circle cx="25" cy="27" r="2" />
        <circle cx="12" cy="27" r="2" />
      </svg>

      <span class="badge badge-light" id="carts-items-count">
        {{ getTotalItemsCount() }}
      </span>
    </button>

    <div class="dropdown-menu dropdown-menu-right" style="width: 400px;">
      <ul class="list-group">
        <li v-if="productItems.length == 0" class="list-group-item">Empty cart...</li>
        <ProductListItemComponent
          v-for="(prod, idx) in productItems"
          v-bind:product="prod"
          v-bind:key="idx" />
      </ul>
    </div>
  </span>
</template>

<script>

import ProductListItemComponent from "./ProductListItemComponent";
import { getCart, getProduct, pushProductToCart } from "../api/client";

export default {
  name: 'AppComponent',
  components: {ProductListItemComponent},
  props: {
    productItems: {
      default: () => [],
      type: Array
    }
  },
  methods: {
    getTotalItemsCount: function () {
      return this.productItems.reduce((total, prod) => total + (prod.quantity || 0), 0)
    }
  },
  mounted() {
    const cartsMicrofrontend = document.getElementById('carts');

    cartsMicrofrontend.addEventListener('add-product-to-cart', (ev) => {
      const product = ev.detail;

      const existingProduct = this.productItems.find(
        (prod) => prod.id === product.id
      );

      pushProductToCart(product.id).then(() => {
        if (existingProduct) {
          existingProduct.quantity++;
          return;
        }

        this.productItems.push({...product, quantity: 1});
      });
    });

    cartsMicrofrontend.addEventListener('initialize-cart', () => {
      getCart().then((response) => {
        response.data.forEach((prod) => {
          getProduct(prod.itemId).then((response) => {
            this.productItems.push({...response.data, quantity: prod.quantity});
          });
        });
      });
    });

    cartsMicrofrontend.addEventListener('reset-cart', () => {
      this.productItems = [];
    });
  }
}
</script>
