<template>
  <footer class="footer">
    <div class="cont">
      &copy; {{ currentYear }} Azasiphe Ndoro
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: red;
  color: black;
  text-align: center;
  padding: 10px;
  
  bottom: 0;
  width: 100%;
}
</style>