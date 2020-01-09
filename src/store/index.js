import Vue from 'vue'
import Vuex from 'vuex'
import applicants from "./modules/applicants";
import employees from "./modules/employees";
import scopes from "./modules/scopes";
import positions from "@/store/modules/positions";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    applicants, employees, scopes, positions
  }
})
