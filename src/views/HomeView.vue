<template>
   <nav>
    <div class="logo">
      <img src="https://i.postimg.cc/PJM7dyMR/images-25.jpg" alt="Logo" />
    </div>
    <div class="links" :class="{ 'show-links': showMenu }">
      <router-link to="/">Home</router-link> |
      <router-link to="/">About</router-link> |
      <router-link to="/resume">Education</router-link> |
      <router-link to="/project">My work</router-link> |
      <router-link to="/testimonials">Reviews</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="toggle-button" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </div>
  </nav>
  <div class="stars">
    <div class="welcome-section" style="background-color: black;">
      <div class="space" style="background-color: black;"></div>
      <div class="mid-label" style="background-color: black; color: antiquewhite">
        <div class="mid-label__text" style="background-color: black; color: antiquewhite;">WELCOME TO AZASIPHE'S PORTFOLIO!</div>
      </div>
    </div>

    <div class="home" v-if="showHomePage">
      <div class="about-home" style="margin-top: 50px;">
        <div class="texts">
          <h1 class="name typing-text" id="trade-winds-regular">AZASIPHE NDORO</h1>
          <h4 class="role">An aspiring software developer</h4>
          <div class="icons">
            <a href="https://github.com/" target="_blank">
              <i class="fab fa-github icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/azasiphe-ndoro-01918827a/" target="_blank">
              <i class="fab fa-linkedin icon"></i>
            </a>
          </div>
          <button @click="downloadCV" class="cv-button">View my CV</button>
        </div>
        <i id="moveDown" class="fa fa-chevron-down fa-3x" :class="{ 'shake': shakeAnimation }" @click="navigateToAbout"></i>
      </div>
    </div>
  </div>


 <!-- about page -->
 <section id="about" class="container-fluid" v-if="showHomePage">

<div class="row section-banner" >
  <div class="col-md-offset-3 col-md-6 text-center">
    <div>
      <span class="line about"></span>
      <span class="trade-winds-regular" style="margin: 0 0 0 35%;">about me</span>
      <span class="line about"></span>
    </div>
  </div>
</div>

<div class="both">
<img src="https://i.ibb.co/DpD3Fyv/1000042200-1332fcb3592c5142eb9277536f14af06-2023-07-19-23-18-14-removebg-preview.png" class="img-a" style="border-radius: 40%;" width="20%;">

 
<div class="background">
  <p class="trade-winds-regular"> Who am i?</p>
  <p>Fullname:Azasiphe Ndoro 
</p>
<p>
 D.O.B:14 November 2004
</p>
<P>
 Hi!Through this portfolio, I invite you to explore the culmination of my work, creativity, and passion. It's a reflection of who I am, what I stand for, and the boundless potential I believe we all possess. Thank you for joining me on this journey.
</P>
</div>
</div>
<div class="row max">

  <div class="col-sm-4 text-center">
    <div class="desc">
      <div class="icon-me"><i class="fa fa-user"></i></div>
      <p>A fullstack developer with a current focus on front-end development. I find joy in every aspect of the design process, from collaborative discussions to bringing ideas to life through code.</p>
    </div>
  </div>

  <div class="col-sm-4 text-center">
    <div class="desc">
      <div class="icon-me"><i class="fa fa-mortar-board"></i></div>
      <p>As a front-end developer, I specialize in crafting engaging and user-friendly interfaces. I am passionate about creating seamless experiences that not only look good but also deliver exceptional functionality. I thrive on the challenges of turning design concepts into interactive and responsive web applications.</p>
    </div>
  </div>

  <div class="col-sm-4 text-center">
    <div class="desc">
      <div class="icon-me"><i class="fa fa-rocket"></i></div>
      <p>In addition to my core skills, I am continuously expanding my knowledge and exploring new technologies. I believe that staying curious and embracing new challenges are essential traits for a developer.</p>
    </div>
  </div>

</div>


</section>
<!-- education -->
<section id="education" class="container-fluid" v-if="showHomePage" style="background-color: #121212;">
  <div>
    

    <div class="alli">
  <h2 class="trade-winds-regular">Education</h2>
  <div class="card-container" v-if="$store.state.ResumeData.length > 0">
    <div v-for="edu in $store.state.ResumeData[0].education" :key="edu.Id" class="card">
      <div class="card-inner" ontouchstart="this.classList.toggle('hover');">
        <div class="card-front">
          <div class="card-icon">
            🎓
          </div>
          <div class="card-content1">
            <p>{{ edu.schoolName }}</p>
            <p>{{ edu.Year }}</p>
          </div>
        </div>
        <div class="card-back">
          <div class="card-content2">
            <p>{{ edu.schoolName }}</p>
            <p>{{ edu.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <h2 class="trade-winds-regular">Skills</h2>
      <div class="skills-container" v-if="$store.state.ResumeData.length > 1">  
        <div v-for="skill in $store.state.ResumeData[1].skills" :key="skill.Id" class="card skill-card">
          <div class="card-content">
            <img :src="skill.url" class="skill-image" />
            <p class="skill-name">{{ skill.skillName }}</p>
          </div>
        </div>
      </div>
      <div v-if="loading" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>


</section>
<section id="project" class="container-fluid" v-if="showHomePage" style="background-color: black;">

  <h1 class="trade-winds-regular">PROJECTS</h1>
 

 <div class="projects">
   <div class="project-container">
     <div class="card project-card" v-for="project in $store.state.ProjectData" :key="project.id">
       <div class="card-content" style="background-color: black;">
         <img :src="project.imageUrl" class="pro-image" />
         <p class="project-name">{{ project.name }}</p>
         <div class="project-details">
           <p class="project-name">{{ project.name }}</p>
           <div class="button-container">
             <a :href="project.liveLink" target="_blank" class="live-button">Live</a>
             <a :href="project.codeLink" target="_blank" class="code-button">Code</a>
           </div>
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

</section>
<section  id="testimonials" class="container-fluid" v-if="showHomePage"  style="background-color: black;">
  <div class="test">
    
      <h1 class="trade-winds-regular">REVIEWS</h1>
   
    <div id="app" class="container mt-4">
      <div id="carouselTestimonials" class="carousel slide">
        <div class="carousel-inner">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :class="{ 'carousel-item': true, active: index === 0 }"
          >
            <div class="card" >
              <div class="le">
                <img :src="testimonial.imageUrl" class="card-img-top" alt="Testimonial Image" />
                <div class="card-body" >
                  <h5 class="card-title">{{ testimonial.name }}</h5>
                  <p class="card-text">{{ testimonial.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div v-if="loading" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  </div>
</section>
<section id="contacts" class="container-fluid" v-if="showHomePage"  style="background-color: black;">
  <h1>Contact Me</h1>
  
  <div class="all" style="background-color: black;">
    <div id="container-12">
      <form
        class="form-co"
        action="https://formspree.io/f/xyyqrzaa"
        method="POST"
      >
      <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name:</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name">
              </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Massage:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="massage..."></textarea>
              </div>
        <button onclick="button()">Send</button>
      </form>
      
      <div class="col">
        
        <p class="pa"> <i class="fas fa-phone"></i> Phone: 083 389 3284</p>
        <p class="pa"> <i class="fab fa-github"></i> Github: Azasiphe Ndoro</p>
        
        <p class="pa">
          <i class="fab fa-linkedin"></i> LinkedIn: Azasiphe Ndoro
        </p>
        <p class="pa"><i class="far fa-envelope"></i> Email: azasiphendoro@gmail.com</p>
       
      </div>
      
      <div v-if="loading" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      shakeAnimation: true,
      showHomePage: true
    };
  },
  computed: {
    project() {
      return this.$store.state.ProjectData;
    },
    resume() {
      return this.$store.state.ResumeData;
    },
    testimonials() {
      return this.$store.state.TestimonialsData;
    },
  },
  mounted() {
    // Fetching project data
    this.fetchDataproject().then(() => {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }).catch((error) => {
      console.error('Error fetching project data:', error);
      this.loading = false; 
    });

    // Fetching resume data
    this.fetchDataresume().then(() => {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }).catch((error) => {
      console.error('Error fetching resume data:', error);
      this.loading = false; 
    });

    // Fetching testimonials data
    this.fetchDatatestimonials().then(() => {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }).catch((error) => {
      console.error('Error fetching testimonials data:', error);
      this.loading = false; 
    });

    // Simulate showHomePage after 7.5 seconds
    setTimeout(() => {
      this.loading = false;
      setTimeout(() => {
        this.showHomePage = true;
      }, 7500); 
    }, 1000);
  },
  methods: {
    fetchDataproject() {
      return this.$store.dispatch('fetchData');
    },
    fetchDataresume() {
      return this.$store.dispatch('fetchData');
    },
    fetchDatatestimonials() {
      return this.$store.dispatch('fetchData');
    },
    downloadCV() {
      window.open('https://i.ibb.co/0q7wNbX/Gray-and-Blush-Feminine-Resume.png','_blank');
    },
    navigateToAbout() {
      this.$router.push('#about');
      this.shakeAnimation = true;
      setTimeout(() => {
        this.shakeAnimation = true;
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
  height: 90vh;
  
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
  margin-top: 25px;
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

/* about */
#about {
  width: 100vw;
  background-color:black;
  color: #eeeeee;
  padding-top: 20px;
  padding-bottom: 50px;
}



.icon-me {
  text-align: center;
  font-size: 5em;
  color: red;
  padding-top: 20px;
  padding-bottom: 25px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.30);
}
.section-title.about {
  color: rgba(0, 0, 0, 0.54);
  text-shadow: 1px 1px rgba(0, 0, 0, 0.75);
}
.line {
  height: 3px;
  width: 100px;
  position: relative;
  top: -12px;
  display: inline-block;
  background-color: #999;
}

.line.about {
  background-color: rgba(0, 0, 0, 0.54);
}
.trade-winds-regular {
  font-family: "Trade Winds", system-ui;
  font-weight: 600;
  text-align: center;
  position: relative;
  color: #eeeeee;
text-shadow: red 5px 4px 8px;
  font-size: 50px;

}
#trade-winds-regular {
  font-family: "Trade Winds", system-ui;
  font-weight: 600;
  text-align: center;
  position: relative;

  font-size: 50px;

}

/* education */
.about {
  text-align: center;
  text-decoration: underline 8px solid black;
  background-color: red;
  padding: 15px;
  color: black;
}

.alli {
 
  padding: 20px;
}
.card {
  display: inline;
  width: 80px; 
 
  height: 80px; 
  perspective: 1000px;
}

.card-inner {
  margin: 0 0 0 20%;
  width: 80%;
  height: 100%;
  transition: transform 0.7s;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  width: 60%;
  height: 60%;
  backface-visibility: hidden;
  position: relative;
  
}

.card-front {
  background-color: red; 
  padding: 30px;

  border: 3px solid white;
}

.card-back {
  background-color: black;
  color: antiquewhite;
  border:2px solid red ;
  padding: 10px;
  transform: rotateY(180deg);
}   .skills-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 10px;
    margin: 0 0 0 12%; 
    margin-top: 20px; 
  }

  .skill-card {
    width: 150px;
    height: 150px; 
    margin: 10px; 
    border-radius: 50%; 
    border: 3px solid red;
    overflow: hidden; 
    position: relative;
    transition: transform 0.3s ease;
  }

  .skill-card:hover {
    transform: scale(1.2); /* Enlarge on hover */
    z-index: 2; /* Bring to front on hover */
  }

  .card-content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0; 
  }

  .skill-image {
    width: 70%; 
    height: auto;
  }

  .skill-name {
    margin-top: 3px; 
    font-size: 20px; 
    opacity: 0; 
    transition: opacity 0.3s ease;
  }

  .skill-card:hover .skill-name {
    opacity: 1; /* Show skill name on hover */
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
/* testimonials */
#testimonials .carousel-inner {
  background-color: black;
  margin-top: 40px;
}

#testimonials .card {
  background-color: black;
  color: white;
  border-radius: 10px;
  text-align: center;
  max-width: 70%;
  width: 60%;
  margin: 0 auto;
  height: 80vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#testimonials .card img {
  width: 40%; /* Adjust the image size */
  border: 5px solid white;
  border-radius: 50%;
  margin: 0 auto;
}


#testimonials .carousel-control-prev-icon,
#testimonials .carousel-control-next-icon {
  background-color: red;
}

#testimonials .le {
  border: 2px solid red;
  width: 80%;
  margin: 0 0 0 8%;
}

#testimonials .spinner {
  margin-top: 20px;
  text-align: center;
}

#testimonials .spinner > div {
  width: 18px;
  height: 18px;
  background-color: red;
  margin: 4px;
  border-radius: 100%;
  display: inline-block;
  animation: bounce  2s infinite ease-in-out;
}

#testimonials .spinner .bounce1 {
  animation-delay: -0.32s;
}

#testimonials .spinner .bounce2 {
  animation-delay: -0.16s;
}

@media (max-width: 768px) {
  #testimonials .carousel-inner {
    margin-top: 20px;
  }

  #testimonials .card {
    max-width: 60%;
  }

  #testimonials .card img {
    width: 50%;
  }
}
/* projects */
.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.project-card {
  background-color: black;
  border: 2px solid transparent;
  border-radius: 2px;
  margin: 20px;
  padding: 130px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: calc(33.33% - 40px);
  position: relative;
  overflow: hidden;
  transition: border-color 0.5s;
  box-sizing: border-box;
  animation: border-color-animation 5s infinite;
}

@keyframes border-color-animation {
  0% { border-color: green; }
  20% { border-color: blue; }
  30% { border-color: pink; }
  40% { border-color: red; }
  50% { border-color: white; }
  60% { border-color: black; }
  80% { border-color: yellow; }
  100% { border-color: green; }
}

.pro-image {
  width: 50%;
  height: auto;
  border-radius: 5px;
  border: 5px solid black;
  transition: filter 0.5s;
}

.project-details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-details {
  opacity: 1;
}

.project-name {
  font-style: italic;
  color: red;
  font-size: 25px;
  text-decoration: underline 2px solid black;
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.live-button,
.code-button {
  background-color: black;
  color: red;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  border: 3px solid red;
  transition: background-color 0.3s ease;
}

.live-button:hover,
.code-button:hover {
  background-color: red;
  color: black;
}

nav {
  display: flex;
  padding: 15px;
  position: relative;
  top: 20px;
  background-color: black;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 50px;
  border-radius: 50%;
  border: 3px solid white;
}

.links {
  display: flex;
}

nav a {
  font-weight: 50px;
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 0 15px;
  text-align: center;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

nav a:hover {
  color: red;
  border-color: red;
}

nav a.router-link-exact-active {
  color: #42b983;
  border: 3px solid red;
  border-radius: 5px;
}

.toggle-button {
  display: none; 
  cursor: pointer;
}

.toggle-button i {
  color: white;
  font-size: 1.5rem;
}
button {
    background-color: black;
    margin-top: 50px;
   
    padding: 25px;
    border: 3px solid red;
    color: white;
    border-radius: 24px;
  }

  .form-co {
    text-align:left;
    border: 10px solid red;
    padding: 50px;
    flex: 1; 
    margin-right: 20px; 
  }

  .col {
    flex: 1; 
  }
#container-12 {
    background-color: black;
    align-items: center;
    justify-content: center;
    padding: 50px;
   
    border-radius: 50px;
    display: flex; 
    flex-wrap: wrap; 
  }
.show-links {
  display: flex !important;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 0;
  background-color: black;
  width: 100%;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
  }

  .links {
    display: none;
  }

  .toggle-button {
    display: block; 
  }
}
</style>