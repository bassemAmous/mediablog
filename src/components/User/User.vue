<template>
    <v-container fluid grid-list-md>
        
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
        <v-data-iterator
          v-if="!loading"
                :items="users"
                :rows-per-page-items="rowsPerPageItems"
                :pagination.sync="pagination"
                content-tag="v-layout"
                row
                wrap
        >
            <v-flex
                    slot="item"
                    slot-scope="props"
                    xs12
                    sm6
                    md4
                    lg3
            >
         
                <v-card >
                    <v-card-title ><h4>{{ props.item.name }}</h4></v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                        <v-list-tile>
                            <v-list-tile-content>username:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.username }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>email:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.email }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>address:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.address.street }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>phone:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.phone }}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>website:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.website }}</v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
          
            </v-flex>
        </v-data-iterator>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            rowsPerPageItems: [4, 8, 12],
            pagination: {
                rowsPerPage: 8
            },
            
              

    }),
       computed: {
    users(){
                return this.$store.getters.loadedUsers
            },
               loading () {
        return this.$store.getters.loading
      },
            
    }
    }
</script>