<template>
  <div id="app">
<my-header></my-header>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import myHeader from './components/Header.vue';

export default {
  components: {
    myHeader
  }
}
</script>

<style>
@import '@/assets/styles/main.scss';
</style>
