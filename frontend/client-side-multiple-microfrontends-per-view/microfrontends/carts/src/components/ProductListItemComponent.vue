<template>
  <li class="list-group-item">
    <div class="media">
      <img
        class="mr-3"
        width="64"
        :src="`http://localhost:8080${product.imageUrl[0]}`"
      />
      <div class="media-body">
        <h5 class="mt-0">
          {{product.name}} - &dollar;{{product.price}}
          <span class="badge badge-pill badge-primary float-right p-list-item-count">
            {{ product.quantity || 1 }}
          </span>
        </h5>
      </div>
    </div>
  </li>
</template>

<script>
    export default {
        name: 'ProductListItemComponent',
        props: {
          product: Object
        }
    }
</script>

