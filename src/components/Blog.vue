<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large  class="info">Explore Posts</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large class="info">Organize Posts</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
                  v-for="blog in blogs"
                  :src="blog.imageUrl"
                  :key="blog.id">
            <div class="title">
              {{ blog.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome Blog!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
 /**
   * @vue-data {array} blogs- array of images that they will be display on this dashbord,
   */
    export default {
        data () {
            return {
                blogs: [
                    { imageUrl: 'http://cybernob.com/wp-content/uploads/2017/02/blog-designing-kerala.png', id: 'afajfjadfaadfa323', title: 'UX, social media, content, writing...' },
                    { imageUrl: 'https://www.jbklutse.com/wp-content/uploads/2017/12/blogging.jpg', id: 'aadsfhbkhlk1241', title: 'posts comments creativity...' }
                ]
            }
        }
    }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>