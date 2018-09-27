
import axios from 'axios';

import credential from '../../credential/appCredentials'
 /**
   * @vue-data {Object} rowsPerPageItems- it's about the row per page
   * @vue-data {array} pagination- paginatio,
   * @vue-computed {array} user- it's about displaying all the users
   * @vue-computed {boolean} loading- boolean
   */
export default {
state: {
     loadedPosts: [],
     loadedPostDetail: {},
     postComments: []
},
//mutate  setLoadedPosts, setLoadedPostDetail, setLoadedPostComments
mutations: {
    setLoadedPosts (state, payload) {
      state.loadedPosts = payload
    },
    setLoadedPostDetail (state, payload) {
      state.loadedPostDetail = payload
    },
    setLoadedPostComments (state, payload) {
      state.postComments = payload
    }
},
// call the actions  loadedPosts loadedPostDetail loadedPostComments
actions: {
  async  loadedPosts ({commit}) {
      try{
      commit('setLoading', true)
      const response = await axios.get(credential.postsUrl)

      const posts = response.data
      commit('setLoadedPosts', posts)
      commit('setLoading', false)
       }
       catch(error){
              commit('setLoading', false)
       }
  },
   async  loadedPostDetail ({commit},id) {
      try{
      commit('setLoading', true)
      const response = await axios.get(credential.postsUrl+id)
      const posts = response.data
      commit('setLoadedPostDetail', posts)
      commit('setLoading', false)
       }
       catch(error){
              commit('setLoading', false)
       }
  },
   async  loadedPostComments ({commit},id) {
      try{
      commit('setLoading', true)
      const response = await axios.get(credential.postsUrl+id+credential.postCommentsUrl)
      const posts = response.data
      commit('setLoadedPostComments', posts)
      commit('setLoading', false)
       }
       catch(error){
              commit('setLoading', false)
       }
  },


},
getters: {
loadedPosts(state){
return state.loadedPosts;
},
loadedPostDetail(state){
return state.loadedPostDetail;
},
loadedPostComments(state){

return state.postComments;
}

}
}
