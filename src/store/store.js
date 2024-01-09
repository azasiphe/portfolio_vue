
import Vuex from 'vuex';
// import ApiService from '../services/Apiservice'; 

// Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        resumeData: {
            education: [],
            skills: [],
        },
    },
    mutations: {
        setResumeData(state, payload) {
            state.resumeData = payload;
        },
    },
    actions: {
        // fetchResumeData({ commit }) {
        //     try {
        //         const data = ApiService.getData();
        //         commit('setResumeData', data);
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // },
    },
});