import Vue from "vue";
import Vuex from "vuex";
import Login from "./login"
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Login
  }
});
