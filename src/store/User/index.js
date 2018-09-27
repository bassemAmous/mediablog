

import axios from 'axios';
import credential from '../../credential/appCredentials'

export default{
state: {
     loadedUsers: [],
     loadedUser: {}
},
mutations: {
    setLoadedUsers (state, payload) {
      state.loadedUsers = payload
    },
    setLoadedUser (state, payload) {
      state.loadedUser = payload
    },
},
actions: {
  async  loadedUsers ({commit}) {
             try{
               commit('setLoading', true)
      const response = await axios.get(credential.usersUrl)
      const posts = response.data
          commit('setLoadedUsers', posts)
          commit('setLoading', false)
       }
       catch(error){
              commit('setLoading', false)
       }
  },
    async  loadedUser ({commit},id) {
             try{
              commit('setLoading', true)
      const response = await axios.get(credential.usersUrl+id)
      const user = response.data
          commit('setLoadedUser', user)
          commit('setLoading', false)
       }
       catch(error){
              commit('setLoading', false)
       }
  }
},
getters: {
loadedUsers(state){
return state.loadedUsers;
},
loadedUser(state){
return state.loadedUser;
}
}
}

