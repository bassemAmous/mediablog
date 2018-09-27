<template>
    <v-layout row>

        <v-flex xs12 sm6 offset-sm3>
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
            <v-card v-if="!loading">

                <v-card>
                    <v-card-text><h3> {{postDetail.title}}</h3> {{postDetail.body}}</v-card-text>
                    <v-card-text>by {{user.username}} </v-card-text>
                </v-card>
                  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
    >
      <div slot="header">Comments</div>
                <v-list two-line>
                    <template v-for="(item, index) in comments">
                        <v-list-tile :key="index" avatar ripple >
                            <v-list-tile-content>
                                <v-list-tile-sub-title>{{ item.name }}</v-list-tile-sub-title>
                                <v-list-tile-sub-title >{{ item.email }}</v-list-tile-sub-title>
                                <v-list-tile-sub-title class="text--primary">{{ item.body }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>

                                <v-icon color="grey lighten-1">star_border</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-divider v-if="index + 1 < postDetail.length" :key="`divider-${index}`"></v-divider>
                    </template>
                </v-list>

    </v-expansion-panel-content>
  </v-expansion-panel>
            </v-card>
        </v-flex>

    </v-layout>
</template>

<script>

  /**
   * @vue-computed {Object} postDetail- post detail
   * @vue-computed {array} comments- array comments
   * @vue-computed {Object} useruser- detail
   * @vue-computed {boolean} loading- boolean
   */
    export default {
           computed: {
            postDetail(){
                return this.$store.getters.loadedPostDetail
            },
            comments(){
                return this.$store.getters.loadedPostComments
            },
              user(){
                return this.$store.getters.loadedUser
            },
              loading () {
        return this.$store.getters.loading
      },
        },
    }
</script>
