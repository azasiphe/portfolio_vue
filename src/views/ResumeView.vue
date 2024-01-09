<template>
  <div>
    <h2>Education</h2>
    <ul>
      <li v-for="edu in $store.state.ResumeData[0].education" :key="edu.Id">
        {{ edu.schoolName }} - {{ edu.Year }}
      </li>
    </ul>

    <h2>Skills </h2>
    <div class="skills-container">
      <div v-for="skill in $store.state.ResumeData[1].skills" :key="skill.Id" class="skill-item">
        
        <div class="skill-info">
          <p>{{ skill.skillName }}</p>
          <p>Level: {{ skill.Level }}</p>
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
    this.fetchDataresume;
  }
}
</script>

<style scoped>
  .skills-container {
    display: flex;
    flex-wrap: wrap;
  }

  .skill-item {
    margin: 10px;
    text-align: center;
  }


</style>