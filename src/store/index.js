import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
const baseUrl = 'http://152.136.112.142:8080'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async getCollections() {
      try {
        const res = await axios.get(baseUrl + '/dashboard/list', {
          headers: {
            "Authorization": "Bearer eyJ0eXAiOiJKc29uV2ViVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZWFyY2gtYmFja2VuZCIsImF1ZCI6InNlYXJjaC11c2VyIiwidXNlcklkIjoxNTQ3NDI1ODc0NjAyNTMyODY2LCJhY2Nlc3NfdG9rZW4iOiJ0ZXN0MSIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJleHAiOjE2OTAyMDk5OTQsIm5iZiI6MTY1ODY3Mzk5NH0.kd-hAVnr_plM3_KxhqiJVRVudNu-6lr7TrJxY1ff7c8"
          }
        })
        return res
      } catch (e) {
        return e
      }
    }
  },
  modules: {
  }
})
