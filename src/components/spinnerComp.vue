<template>
    <div class="spinner">
      <div class="spinner-circle"></div>
    </div>
  </template>
  <script>
   
  export default {
    name: 'SpinnerComp',
  }; 
</script>
  <style scoped>
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .spinner-circle {
    width: 50px;
    height: 50px;
    border: 8px solid transparent;
    border-top-color: red;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>