


<template>
  <div id="app">
    <Navbar />
    <router-view />
    <FooterComp />
    <Spinner v-if="loading" />
  </div>
</template>

<script>
import Navbar from "./components/navbarComp.vue";
import FooterComp from "./components/footerComp.vue";
import Spinner from "./components/spinnerComp.vue";


export default {
  components: {
    Navbar,
    FooterComp, 
    Spinner
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
}
</style>