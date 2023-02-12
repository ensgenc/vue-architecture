import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    // eslint-disable-next-line no-empty-pattern
    async signUp({}, payload) {
      console.log("signUp", payload);
      try {
        const result = await axios.post(`/sign-up`, payload);
        if (result) {
          console.log("signUp success");
        }
      } catch (error) {
        console.log("signUp error", error);
      }
    },
    // eslint-disable-next-line no-empty-pattern
    async signIn({}, payload) {
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
