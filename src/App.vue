<template>
  <v-app >
 <v-toolbar dark class="primary">
   <v-toolbar-side-icon @click.native.stop="sideNav= ! sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
     <v-toolbar-title ><router-link to="/" tag='span' style="cursor: pointer;" >MediaBlog</router-link></v-toolbar-title>
   <v-spacer></v-spacer>
  <v-toolbar-items >
      <v-btn
              flat  v-for="item in menuItems" :key="item.title" :to="item.link">
      <v-icon>{{ item.icon }}</v-icon>
      <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-btn>
  </v-toolbar-items>
 </v-toolbar>
      <main>
          <router-view></router-view>
      </main>
    <v-navigation-drawer v-model="sideNav" temporary >
      <v-list>
        <v-list-tile    v-for="item in menuItems"
                        :key="item.title"
                        :to="item.link">

        <v-list-tile-action>
            <v-icon>{{ item.icon }} </v-icon>
        </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>



export default {
    data () {
    return {
    sideNav:false,
        menuItems: [
            {icon:'supervisor_account', title:'dashbord', link: '/'},
            {icon:'face', title:'Users',link: '/users' },
            {icon:'room', title:'Posts', link: '/posts'}
        ]
    }
  }
}
</script>
