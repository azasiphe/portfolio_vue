<template>
  <div>
      <h2>Education</h2>
      <ul>
          <!-- <li v-for="edu in resumeData.education" :key="edu.Id">
              {{ edu.schoolName }} - {{ edu.Year }}
          </li> -->
      </ul>

      <h2>Skills</h2>
      <div class="skills-container">
          <!-- <div v-for="skill in resumeData.skills" :key="skill.Id" class="skill-item">
              <img :src="getSkillImageUrl(skill)" alt="Skill Image" class="skill-image" />
              <div class="skill-info">
                  <p>{{ skill.skillName }}</p>
                  <p>Level: {{ skill.Level }}</p>
              </div>
          </div> -->
      </div>
  </div>
</template>

<script>
// import ApiService from '../services/Apiservice'; 

export default {
  
    computed: {
        // resumeData() {
            // Use ApiService here
            // return ApiService.getData();
        // },
    },
    methods: {
        getSkillImageUrl(skill) {
            return skill.imageUrl || 'default-image-url';
        },
    },
    // created() {
    //     // Fetch data when the component is created
    //     this.$store.dispatch('fetchResumeData');
    // },
};

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

  .skill-image {
      width: 100px;
      height: 100px;
  }
</style>