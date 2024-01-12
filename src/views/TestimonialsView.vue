<template>
  <div class="test">
    <div class="about">
      <h1>TESTIMONIALS</h1>
    </div>

    <div id="app" class="container mt-4">
      <div id="carouselTestimonials" class="carousel slide">
        <div class="carousel-inner">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :class="{ 'carousel-item': true, active: index === 0 }"
          >
            <div class="card">
              <div class="le">
                <img :src="testimonial.imageUrl" class="card-img-top" alt="Testimonial Image" />
                <div class="card-body">
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
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    testimonials() {
      return this.$store.state.TestimonialsData;
    },
  },
  mounted() { 
    this.fetchDatatestimonials().then(() => {
      
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }).catch((error) => {
      console.error('Error fetching data:', error);
      this.loading = false; 
    });
  },
  methods: {
    fetchDatatestimonials() {
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

.test {
  background-color: black;
}

.carousel-inner {
  background-color: black;
  margin-top: 40px;
}

.card {
  background-color: black;
  color: white;
  
  border-radius: 10px;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  height: 60vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card img {
  width: 20%;
  border: 5px solid white;
  border-radius: 50%;
  margin: 0 auto;
}

.carousel-control-prev,
.carousel-control-next {
  background-color: black;
  border: 3px solid red;
  color: white;
  font-size: 4px; 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: red;
}

.le {
  border: 2px solid red;
  width: 80%;
  margin: 0 0 0 8%;
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

@media (max-width: 768px) {
  .carousel-inner {
    margin-top: 20px;
  }

  .card {
    max-width: 60%;
  }
h5{
  text-decoration: underline 2px solid red;
}
  .card img {
    width: 70%;
  }
}
</style>