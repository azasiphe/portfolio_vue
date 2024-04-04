


<template>
  <div id="app">
    <Navbar />
    <!-- <FooterComp /> -->
  
    <SpinnerComp v-if="loading" />
    <RouterView/>
  </div>
</template>

<script>
import Navbar from "./components/navbarComp.vue";

// import FooterComp from "./components/footerComp.vue";
import SpinnerComp from "./components/spinnerComp.vue";


export default {
  components: {
    Navbar,
    // FooterComp, 
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