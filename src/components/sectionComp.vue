<template>
    <div>
      <router-view />
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'sectionComp',
 
  };
  </script>
  