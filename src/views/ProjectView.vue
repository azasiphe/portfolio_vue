<template>
   
    <div class="about">
      <h1>PROJECTS</h1>
    </div>

<div class="projects">
  
  <div class="project-container">
    <div class="card project-card" v-for="project in $store.state.ProjectData" :key="project.id">
        <img :src="project.imageUrl" class="pro-image" />
        <div class="card-content">
          <p>{{ project.name }}</p>
          <div class="button-container">
            <a :href="project.liveLink" target="_blank" class="live-button">Live</a>
            <a :href="project.codeLink" target="_blank" class="code-button">Code</a>
          </div>
        </div>
      </div>
  </div>
  <div v-if="loading" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
</div>
  

</template>


<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    project() {
      return this.$store.state.ProjectData;
    },
  },
  mounted() {
    this.fetchDataproject().then(() => {
     
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }).catch((error) => {
      console.error('Error fetching data:', error);
      this.loading = false; 
    });
  },
  methods: {
    fetchDataproject() {
      return this.$store.dispatch('fetchData');
    },
  },
};
</script>

<style scoped>

.about {
  text-align: center;
  text-decoration: underline 8px solid black;
  background-color: red;
  padding: 15px;
  color: black;
}
.project-container {
  display: flex;
  flex-wrap: wrap;
  
  justify-content: space-around;
  
}
.projects{
  background-color: black;
}

.project-card {
  background-color: white;
  border: 5px solid red;
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  flex-basis: calc(33.33% - 40px); 
}

.pro-image {
  width: 90%;
  height: 200px;
  border-radius: 5px ;
  border: 5px solid black;
}


.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.live-button,
.code-button {
  margin: 10px;
  background-color: black; 
  color: red;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  border: 3px solid red;
  transition: background-color 0.3s ease;
}
p{
  font-style: italic;
  color: red;
  font-size: 25px;
  text-decoration: underline 2px solid black;
}
.live-button:hover,
.code-button:hover {
  background-color: red;
  color: black; 

  color: black;}


  @media (max-width: 740px) {
  .project-card {
    flex-basis: calc(50% -100px);
  }
  
  
}

@media (max-width: 800px) {
  .project-card {
    flex-basis: calc(150% - 20px);
  }
}

.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: red;
  margin: 4px;
  border-radius: 100%;
  display: inline-block;
  animation: bounce 2s infinite ease-in-out;
}

.spinner .bounce1 {
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>