import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    ResumeData: [],
    ProjectData: [],
    TestimonialsData: [],
  },
  getters: {},
  mutations: {
    resumeData(state, data) {
      state.ResumeData = data;
    },
    projectData(state, data) {
      state.ProjectData = data;
    },
    testimonialsData(state, data) {
      state.TestimonialsData = data;
    },
  },
  actions: {
    fetchData({ commit }) {
      axios.get('http://localhost:3333/data')
        .then(response => {
          commit('resumeData', response.data);
          commit('projectData', response.data[2].ProjectData);
          commit('testimonialsData', response.data[3].testimonials);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },
  modules: {}
});