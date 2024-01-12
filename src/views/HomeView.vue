

<template>
  <div class="home">
    <div class="both">
      <div class="image-container">
        <img src="https://i.ibb.co/mq0jsvS/IMG-20230707-WA0114-removebg-preview-1-removebg-preview.png" class="image-home"/>
      </div>
      <div class="about-home">
        <div class="texts">
          <h1 class="name typing-text">AZASIPHE NDORO</h1>
          <h4 class="role">An aspiring software developer</h4>
          <div class="icons">
            <a href="https://github.com/" target="_blank">
              <i class="fab fa-github icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/azasiphe-ndoro-01918827a/" target="_blank">
              <i class="fab fa-linkedin icon"></i>
            </a>
          </div>
          <button @click="downloadCV" class="cv-button">Download CV</button>
        </div>
      </div>
      <div v-if="loading" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
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
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    downloadCV() {
      
      window.open('https://i.ibb.co/Tg4874Z/Gray-and-Blush-Feminine-Resume.jpg', '_blank');
    },
  },
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
  width: 35%;
}

.image-home {
  width: 100%;
  margin-top: 10px;
  margin-left: -750px;
}

.about-home {
  text-align: center;
  margin-top: 15px;
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

.typing-text {
  overflow: hidden; 
  border-right: 0.15em solid red; 
  white-space: nowrap; 
  margin: 0 auto; 
  letter-spacing: 0.15em; 
  animation: typing 3s steps(40, end), blink-caret  infinite alternate;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  to {
    border-color: transparent;
  }
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

.spinner {
  margin-top: 20px;
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: red;
  margin: 4px;
  border-radius: 100%;
  display: inline-block;
  animation: bounce  2s infinite ease-in-out;
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
h5{
  text-decoration: underline 2px solid red;
}


@media only screen and (max-width: 600px) {
  .home {
    background-size: cover; 
  }

  .both {
   
    text-align: center;
  }

  .image-container {
    width: 20%; 
    margin: 20px auto;
  }

  .about-home {
 align-items: center
 ;
 justify-content: center;
 text-align: center; 
 width: 100%;

  }

  .texts {
    margin-left: 0;
  }

  .name {
    font-size: 3em; }

  .role {
    font-size: 1.5em; 
  }

  .icons {
    margin-top: 10px; 
  }

  .icon {
    font-size: 1.5em; 
  }

  .cv-button {
    margin-top: 10px;
    font-size: 0.8em; 
  }}

</style>