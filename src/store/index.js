
import Vue from 'vue'
import Vuex from 'vuex'
import post from './Post'
import user from './User'
import other from './Other'

Vue.use(Vuex)
export const store = new Vuex.Store({
modules:{
  post: post,
  user: user,
  other: other
}
}
)
