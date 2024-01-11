<template>
  <div class="testimonial-view1">
    <div class="about">
      <h1>TESTIMONIALS</h1>
    </div>

    <Swiper :options="swiperOptions" ref="swiper">
      <SwiperSlide
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="testimonial"
      >
        <div class="testimonial-content">
          <div class="bdt-ep-review-card-carousel-item">
            <div class="bdt-ep-review-card-carousel-content :">
              <img class="bdt-ep-review-card-carousel-name" >
              <h3 class="bdt-ep-review-card-carousel-name">{{ testimonial.name }}</h3>
              <div class="bdt-ep-review-card-carousel-job-title">{{ testimonial.jobTitle }}</div>
              <div class="bdt-ep-review-card-carousel-rating bdt-flex-inline bdt-flex-middle bdt-star bdt-before">
               
                <span v-for="star in Array(testimonial.rating).fill(0)" :key="star">
                  <i class="ep-icon-star" aria-hidden="true"></i>
                </span>
              </div>
              <div class="bdt-ep-review-card-carousel-text">
                <p>{{ testimonial.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 1,
        loop: true,
        autoplay: {
          delay: 8000,
        },
      },
    };
  },
  computed: {
    testimonials() {
      const data = this.$store.state.TestimonialsData;
      console.log(data);
      return data;
    },
  },
  mounted() {
    this.fetchData().catch((error) => {
      console.error('Error fetching data:', error);
    });

    // Log the Swiper instance
    console.log(this.$refs.swiper.swiper);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    fetchData() {
      return this.$store.dispatch('fetchData');
    },
  },
};
</script>

<style scoped>
.testimonial-view1 {
  background-color: black;
}

.about {
  text-align: center;
  text-decoration: underline 8px solid black;
  background-color: red;
  padding: 15px;
  color: black;
}

.testimonial-content {
  width: 100%;
  text-align: center;
  background-color: black;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: white; /* Set text color to white */
}

.bdt-ep-review-card-carousel-item {
  width: 360px;
  margin-right: 20px;
}

.pro-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px auto;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

p {
  font-size: 1em;
}

.swiper-container {
  overflow: hidden;
}

.swiper-slide {
  text-align: center;
}
</style>