<template>
  <v-container grid-list-md text-xs-center>


    <v-layout row wrap class="purple lighten-2">
      <v-flex xs12>
        <h1 ><strong>{{msg}}</strong></h1>
      </v-flex>
    </v-layout>
  
    
  </v-container>
</template>

<script>
export default {
  name: 'secoendComponent',
  data () {
    return {
      msg: ' Componet Nesting '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
