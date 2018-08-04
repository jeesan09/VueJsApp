
 <template>

         <v-container grid-list-md text-xs-center>
                <v-layout row wrap >

                      <v-flex xs12 class="deep-orange lighten-2 white--text">

                              <v-carousel>
                                <v-carousel-item
                                  v-for="(item,i) in items"
                                  :key="i"
                                  :src="item.src"
                                ></v-carousel-item>
                              </v-carousel>
                          
                      </v-flex>


                </v-layout> 

         
        </v-container> 


</template>

 


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>








<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>