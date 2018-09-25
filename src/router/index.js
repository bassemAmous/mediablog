import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import User from '@/components/User/User'
import Post from '@/components/Post/Post'
import Detail from '@/components/Post/Detail'
import PageNotFound from '@/components/Other/PageNotFound'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/post/:id',
            name: 'postDetail',
            component: Detail
        },
        {
            path: '/users',
            name: 'user',
            component: User
        },
        
        {
            path: '/posts',
            name: 'post',
            component: Post
        },
        { path: "*", component: PageNotFound }
    ],
    mode: 'history'
})