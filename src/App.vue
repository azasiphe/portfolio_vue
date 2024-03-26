


<template>
  <div id="app">
    <Navbar />
    <sectionComp />
    <FooterComp />
    <SpinnerComp v-if="loading" />
  </div>
</template>

<script>
import Navbar from "./components/navbarComp.vue";
import SectionComp from "./components/sectionComp.vue";
import FooterComp from "./components/footerComp.vue";
import SpinnerComp from "./components/spinnerComp.vue";


export default {
  components: {
    Navbar,
    SectionComp,
    FooterComp, 
    SpinnerComp
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