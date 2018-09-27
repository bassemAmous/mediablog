
import Vue from 'vue'
import Vuex from 'vuex'
import post from './Post'
import user from './User'
import other from './Other'
       /**
        * @vuedoc
 * @exports component/SideBar
   * @vue-data {string} search- it's about the reasearch concerning the array of posts
   * @vue-data {array} headers- it's the titles of the table,
   * @vue-computed {array} posts- it's about displaying all the posts 
   * @vue-computed {boolean} loading- boolean
   * @vue-methods {routing} detailMethod- it's about dispatching loadedPostDetail,loadedPostDetail,loadedUser
 
   */
Vue.use(Vuex)
export const store = new Vuex.Store({
modules:{
  post: post,
  user: user,
  other: other
}
}
)
