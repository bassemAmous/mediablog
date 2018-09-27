<template>
  <v-card>
    <v-card-title>
     <h2 class="primary--text"> POSTS</h2>
      <v-spacer></v-spacer>
      <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
      ></v-text-field>
    </v-card-title>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
         v-if="loading"
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
         >
          </v-progress-circular>
      </v-flex>
    </v-layout>

    <v-data-table v-if="!loading"
            :headers="headers"
            :items="posts"
            :search="search"

                  @click="detailMethod( 1,1)"
    >
      <template slot="items" slot-scope="props" id="mm">
        <td id="cc"  @click="detailMethod( props.item.id,props.item.userId)"  style="cursor: pointer;" class="click"><h4>{{ props.item.title }}</h4></td>
        <td  @click="detailMethod( props.item.id,props.item.userId)"  style="cursor: pointer;" class="text-xs-right">{{ props.item.body }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>
<script>
    export default {
       /**
   * @vue-data {string} search- it's about the reasearch concerning the array of posts
   * @vue-data {array} headers- it's the titles of the table,
   * @vue-computed {array} posts- it's about displaying all the posts 
   * @vue-computed {boolean} loading- boolean
   * @vue-methods {routing} detailMethod- it's about dispatching loadedPostDetail,loadedPostDetail,loadedUser
 
   */
   
        data () {
            return {
                search: '',
                headers: [
                    {
                        text: 'title',
                        align: 'left',
                        value: 'title'
                    },
                    { text: 'post', value: 'body' },
                ],
            }
        },
        computed: {
            posts(){
                return this.$store.getters.loadedPosts
            },
             loading () {
        return this.$store.getters.loading
      },
        },
        methods: {
          detailMethod(postId,userId){
    this.$store.dispatch('loadedPostDetail',postId)
    this.$store.dispatch('loadedPostComments',postId)
    this.$store.dispatch('loadedUser',userId)
    this.$router.push('/post/'+postId)
            }
        }
    }
</script>
