<template>
  <div>
    <div class="about">
      <h1>Education and Skills</h1>
    </div>

    
    <div class="alli">
      <h2>Education</h2>
      <div class="card-container" v-if="$store.state.ResumeData.length > 0">
        <div v-for="edu in $store.state.ResumeData[0].education" :key="edu.Id" class="card">
          <div class="card-icon">
            🎓
          </div>
          <div class="card-content1">
            <p>{{ edu.schoolName }}</p>
            <p>{{ edu.Year }}</p>
          </div>
          
        </div>
      </div>

      <h2>Skills</h2>
      <div class="skills-container" v-if="$store.state.ResumeData.length > 1">
        <div v-for="skill in $store.state.ResumeData[1].skills" :key="skill.Id" class="card skill-card">
          <div class="card-content">
            <img :src="skill.url" class="skill-image" />
            <p class="skill-name">{{ skill.skillName }}</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  
  computed: {
    fetchDataresume() {
      return this.$store.dispatch('fetchData');
    }
  },
  mounted() {
    this.fetchDataresume.catch(error => {
      console.error('Error fetching data:', error);
    });
  }
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

.alli {
  background-color: black;
  padding: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 25%;
}

.card {
  background-color: red;
  border: 3px solid white;
  border-radius: 5px;
  margin: 20px;
  padding: 15px;
  display: flex;
  position: relative;
}

.card-icon {
  margin-right: 10px;
}

.card-content {
  z-index: 2; 
  position: relative;
}

.card-description {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}



.skills-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap; 
}

.skill-card::after {
  content: "";
  width: 1px;
  height: 50px;
  background-color: red;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
}

.skill-card {
  background-color: white;
  border: 3px solid red;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  position: relative;
  flex: 1;
}

.skill-card:hover p.skill-name {
  font-weight: bold;
}

.skill-card:hover img.skill-image {
  transform: scale(1.1);
}

.skill-image {
  width: 50%;
  height: auto;
}

h2 {
  text-decoration: underline 3px;
}
</style>