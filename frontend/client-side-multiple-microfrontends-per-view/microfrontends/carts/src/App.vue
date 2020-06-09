<template>
  <fragment>
    <AppComponent />
  </fragment>
</template>

<script>
import {Fragment} from 'vue-fragment';
import AppComponent from './components/AppComponent.vue'

export default {
  name: 'App',
  components: {
    AppComponent,
    Fragment
  }
}
</script>
