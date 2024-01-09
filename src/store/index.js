import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
   
    ResumeData: [],
    ProjectsData: [],
    TestimonialsData: [],
  
  },
  getters: {},
  mutations: {
    resumeData(state, data) {
      state.ResumeData = data
    }
  },
  actions: {
    fetchData({ commit }) {
      axios.get('http://localhost:3000/data')
        .then(response => {
          console.log(response.data);
          commit('resumeData', response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },
  modules: {}
});




