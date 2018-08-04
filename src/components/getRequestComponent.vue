<template  >


  <v-container grid-list-md text-xs-center  >
    <v-layout row wrap class="teal darken-3 white--text">
      <v-flex xs12>
        <v-card dark >
          <v-card-text class="px-10 font deep-purple darken-3"><strong>{{customData}}</strong></v-card-text>
        </v-card>
      </v-flex>

   <v-expansion-panel popout dark inset expand>
    <v-expansion-panel-content 
     
    >
      <div slot="header" ><strong>Data From Json Place Holder</strong> </div>
      <v-card  v-for="htval in arrayData"
      :key="i">
        <v-card-text >{{htval.body}}</v-card-text>
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
     
      customData:' HTTP Get Request  ',

      arrayData:[]
    }
  },


  created(){
   
     this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        
        this.arrayData=data.body.slice(0,10);
     
        //console.log(data);

     })

  }


}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .font{
  font-size:30px;
 }
</style>