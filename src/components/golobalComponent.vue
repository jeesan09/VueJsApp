<template>
   <v-container grid-list-md text-xs-center>


    <v-layout row wrap class="amber lighten-3">
      <v-flex xs12>
        <h1 ><strong>{{customData}}</strong></h1>
      </v-flex>
    </v-layout>
  
    <v-layout row wrap >
      <v-flex xs6 class="teal lighten-1">
        <h2>{{grid}}</h2>
      </v-flex>
      <v-flex xs6 class="deep-orange lighten-2">
        <h2>{{grid}}</h2>
      </v-flex>

    </v-layout>    
    
    
  </v-container>
</template>
 


<script>
export default {
 
  data () {
    return {
      msg: ' Global component',
      customData:' Global component ',
      grid:'Example of Grid Material'
    }
  }
}
</script>








<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
