<template>
  <div id="app">
    <NavbarComp/>
   
  </div>
</template>

<script>
import NavbarComp from './components/navbarComp.vue';

export default {
  components: {
    NavbarComp,
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