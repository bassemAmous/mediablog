
import axios from 'axios';

export default {
state: {
     loadedPosts: [],
     loadedPostDetail: {},
     postComments: []
},
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
actions: {
  async  loadedPosts ({commit}) {
      try{
      commit('setLoading', true)
      const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
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
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
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
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
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
