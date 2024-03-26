<template>
  <div class="stars" >
   
    <div class="welcome-section"  style="background-color: black;">
      <div class="space"  style="background-color: black;"></div>
      <div class="mid-label"  style="background-color: black; color: antiquewhite">
        <div class="mid-label__text" style="background-color: black; color: antiquewhite;">WELCOME TO AZASIPHE'S PORTFOLIO!</div>
      </div>
    </div>

   
    <div class="home" v-if="showHomePage">
      <div class="about-home">
        <div class="texts">
          <h1 class="name typing-text">AZASIPHE/NDORO</h1>
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
        <i id="moveDown" class="fa fa-chevron-down fa-3x" :class="{ 'shake': shakeAnimation }" @click="navigateToAbout"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      shakeAnimation: false,
      showHomePage: false 
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
      setTimeout(() => {
        this.showHomePage = true;
      }, 7500); 
    }, 1000);
  },
  methods: {
    downloadCV() {
      window.open('https://i.ibb.co/Tg4874Z/Gray-and-Blush-Feminine-Resume.jpg', '_blank');
    },
    navigateToAbout() {
      this.$router.push('/about');
      this.shakeAnimation = true;
      setTimeout(() => {
        this.shakeAnimation = false;
      }, 1000); 
    },
  },
};
</script>



<style scoped>
.home {
  background-image: url(https://i.ibb.co/TmvnBRg/space-4085276-1280.jpg);
  background-size: cover;
  width: 100%;
  height: 80vh;
}

.both {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.image-container {
  width: 55%;
}

.image-home {

  margin-left: -750px;
}

.about-home {
  text-align: center;
  margin-top: 15px;
  position: relative;
  top: 32%;
  margin: 0 0 0 10%;
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
body {
  background-color: #111214;
  font-family: "Onest", sans-serif;
  font-weight: 100;
  height: 100vh;
  margin: 0;

  width: 100vw;
}

.display-none {
  display: none;
  height: 1px;
  opacity: 0;
  visibility: hidden;
  width: 1px;
}

div[data-star1] {
  animation: animate 0.8s ease-in both;
  animation-iteration-count: 8;
  background-color: darkorange;
  height: 0.7vmin;
  left: 30%;
  position: relative;
  transform: translateZ(-110vmin) rotateY(90deg) rotateX(var(--b))
    translateZ(var(--a)) scaleX(1);
  top: 0%;
  width: 1.3vmin;
  will-change: scale, transform;
}

div[data-star2] {
  animation: animate 0.6s ease-in both;
  animation-iteration-count: 10;
  background-color: rgba(255, 255, 255, 0.7);
  height: 0.4vmin;
  left: 30%;
  position: relative;
  transform: translateZ(-100vmin) rotateY(90deg) rotateX(var(--b))
    translateZ(var(--a)) scaleX(1);
  top: 10%;
  width: 1.6vmin;
  will-change: scale, transform;
}

div[data-star3] {
  animation: animate 0.5s ease-in both;
  animation-iteration-count: 8;
  background-color: rgba(255, 255, 255, 0.8);
  height: 1.6vmin;
  left: 30%;
  position: relative;
  transform: translateZ(-170vmin) rotateY(90deg) rotateX(var(--b))
    translateZ(var(--a)) scaleX(1);
  top: 10%;
  width: 1.6vmin;
  will-change: scale, transform;
}

@keyframes animate {
  0% {
    opacity: 0;
  }

  30%,
  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateZ(0vmin) rotateY(90deg) rotateX(var(--b))
      translateZ(var(--a)) scaleX(5);
  }
}



.space {
  animation: bkg-anim 12s ease-in-out 1s both;
  height: 100vh;
  overflow: hidden;
  perspective: 10vmin;
  position: fixed;
  top: 0;
  transform: rotateX(80deg) rotateY(145deg) scaleY(0.05) scaleX(0.3)
    translateZ(0);
  width: 100vw;
  will-change: transform, background-color, opacity;
  z-index: -1;
}

@keyframes bkg-anim {
  0% {
    background-color: #111214;
    opacity: 1;
    transform: rotateX(50deg) rotateY(90deg) scaleY(0.05) scaleX(0.3);
  }

  10% {
    background-color: #fff;
    transform: rotateX(80deg) rotateY(145deg) scaleY(0.05) scaleX(0.3);
  }

  15% {
    transform: rotateX(80deg) rotateY(145deg) scaleY(0.3) scaleX(0.6);
  }

  20% {
    background-color: #fff;
  }

  32% {
    background-color: transparent;
    transform: scaleY(1) scaleX(1);
  }

  70% {
    opacity: 0.8;
    transform: rotateX(0) rotateY(0) scaleY(1) scaleX(1);
  }

  100% {
    opacity: 0;
    transform: rotate(0);
  }
}

.mid-label {
  display: grid;
  left: 0;
  height: 100vh;
  margin: 0;
  place-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: -10000;
}

.mid-label__text {
  animation: show-mid-label 14.2s ease-in-out both;
  color: #fff;
  font-size: 1.8rem;
  letter-spacing: 0.16rem;
  margin: 0 auto;
  text-align: center;
}

@keyframes show-mid-label {
  0% {
    opacity: 0;
  }

  50% {
    color: #111214;
    opacity: 0;
    letter-spacing: 4vw;
  }

  78% {
    color: #eeeeee;
    opacity: 0.4;
    letter-spacing: 0.16rem;
  }

  85% {
    color: #fff;
    font-size: 2rem;
    opacity: 1;
    transform: scale(1);
  }

  90% {
    color: #fff;
    font-size: 2rem;
    letter-spacing: 0.16rem;
    opacity: 1;
    transform: scale(1);
  }

  100% {
    color: #9e9e9e;
    letter-spacing: 0.16rem;
    font-size: 2rem;
    opacity: 1;
    transform: scale(1);
  }
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


@media only screen and (max-width: 400px) {
  .home {
    background-size: cover; 
  }

  .both {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center; 
  }

  .image-container {
    width: 60%; 
    margin: 20px auto 0;
  }

  .image-home {
    width: 100%; 
  }
  @keyframes shake {
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80%, 100% { transform: translateX(10px); }
}

.shake {
  animation: shake 1s ease;
}
  .about-home {
    align-items: center;
    justify-content: center;
    text-align: center; 
    width: 100%;
  }

  .texts {
    margin-left: 0;
  }

  .name {
    font-size: 3em; 
  }

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
  }
}
</style>