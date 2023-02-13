import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    // TODO OAUTH service should be used
    // TODO Axios set env baseUrl
    async signUp({ commit }, payload) {
      // TODO generic log service should be used
      console.log("signUp", payload);
      try {
        const result = await axios.post(`https://mockapi.io/sign-up`, payload);
        if (result) {
          console.log("signUp success");
        }
      } catch (error) {
        console.log("signUp error", error);
      }
    },
    async signIn({ commit }, payload) {
      console.log("signIn", payload);
      try {
        const result = await axios.post(`https://mockapi.io/sign-in`, payload);
        if (result) {
          console.log("signIn success");
        }
      } catch (error) {
        console.log("signIn error", error);
      }
    },
  },
  modules: {},
});
