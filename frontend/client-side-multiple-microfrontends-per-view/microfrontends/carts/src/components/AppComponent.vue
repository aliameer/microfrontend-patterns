<template>
  <fragment>
    <a
      class="nav-link dropdown-toggle"
      href="#"
      role="button"
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
        3
      </span>
    </a>

    <div class="dropdown-menu dropdown-menu-right">
      <ul class="list-group">
        <li class="list-group-item">Empty cart...</li>
      </ul>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'AppComponent',
  components: { Fragment },
  props: {
    msg: String
  }
}
</script>
