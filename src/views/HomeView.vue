
Copy code
<template>
  <div class="home">
    <div class="both">
      <div class="image-container">
        <img src="https://i.ibb.co/mq0jsvS/IMG-20230707-WA0114-removebg-preview-1-removebg-preview.png" class="image-home"/>
      </div>
      <div class="about-home">
        <div class="texts">
          <h1 class="name">AZASIPHE NDORO</h1>
          <h4 class="role">An aspiring software developer</h4>
          <div class="icons">
            <a href="https://github.com/yourgithubusername" target="_blank">
              <i class="fab fa-github icon"></i>
            </a>
            <a href="https://linkedin.com/in/yourlinkedinusername" target="_blank">
              <i class="fab fa-linkedin icon"></i>
            </a>
          </div>
          <button @click="downloadCV" class="cv-button">Download CV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    downloadCV() {
      alert('CV download functionality goes here');
    }
  }
};
</script>

<style scoped>
.home {
  background-image: url(https://i.ibb.co/0yRs0jW/download-24.png);
  background-size: cover;
  width: 100%;
  height: auto;
}

.both {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.image-container {
  width: 20%;
}

.image-home {
  width: 100%;
  margin-top: 10px;
  margin-left: -750px;
}

.about-home {
  text-align: center;
}

.texts {
  color: red;
  margin-top: 20px;
  margin-left: -250px;
}

.name {
  text-align: center;
  font-size: 4em;
  font-style: italic;
}

.role {
  font-size: 2em;
  font-style: italic;
}

.icons {
  margin-top: 20px;
}

.icon {
  color: red;
  margin-right: 10px;
  font-size: 2em;
}

.cv-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}
</style>