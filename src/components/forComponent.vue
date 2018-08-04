<template  >


  <v-container grid-list-md text-xs-center  >
    <v-layout row wrap class="grey darken-1 white--text">
      <v-flex xs12>
        <v-card dark >
          <v-card-text class="px-10 font deep-purple darken-3"><strong>{{customData}}</strong></v-card-text>
        </v-card>
      </v-flex>

   <v-expansion-panel popout dark inset expand>
    <v-expansion-panel-content 
      v-for="htval in arrayData"
      :key="i"
    >
      <div slot="header" >{{htval.name}}</div>
      <v-card>
        <v-card-text >{{htval.age}}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
     
    </v-layout>
  </v-container>
 

    
    
  
</template>
 


<script>
export default {
 
  data () {
    return {
     
      customData:' Expention Panel  ',

      arrayData:[
           
         {name:'jeesan',age:13},
         {name:'jeesa',age:133},
         {name:'jees',age:1333},
         {name:'jee',age:1333}

      ]
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .font{
  font-size:30px;
 }
</style>