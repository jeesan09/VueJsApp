<template>
  <div id="app">
   <router-view/>
    <div class="vuecss">
     
        <img   src="./assets/logo.png" >


    </div>
    



        <for></for>



                
       

         <v-container grid-list-md text-xs-center>
          <v-layout row wrap >

            <v-flex xs12 class="deep-orange lighten-2 white--text">
                <h1 class=" deep-purple darken-3"><strong>{{daynamicComponent}}</strong></h1>
            </v-flex>


          </v-layout> 


        
          <v-layout row wrap >

            <v-flex xs6 class="teal lighten-1">
                <v-btn color="info" class="deep-orange lighten-2" v-on:click="comp='daynamic1'">Componet-1</v-btn>
            </v-flex>
            <v-flex xs6 class="deep-orange lighten-2">
                 <v-btn  color="info" class="teal lighten-1" v-on:click="comp='daynamic2'">Componet-2</v-btn>
            </v-flex>

          </v-layout>    
        <!--    <component v-bind:is="comp"></component>    <component  is="daynamic1"/>   !--> 
         
        </v-container> 





        
        <component v-bind:is='comp'></component> 
        <getrequest></getrequest>     
        <secoend></secoend>
        <gcomponent></gcomponent>    
        <form-html></form-html>
       
        <footerhtml></footerhtml>

        


  </div>
</template>










<script>
import SecoendComponent from './components/SecoendComponent.vue'
import forComponent from './components/forComponent.vue'
import footerComponent from './components/footerComponent.vue'
import daynamic_1Component from './components/dynamic_1Comoponent.vue'
import daynamic_2Component from './components/daynamic_2Component.vue'
import getRequestComponent from './components/getRequestComponent.vue'
import formComponent from './components/formComponent.vue'


export default {
  name: 'App',

  components:{
   'secoend':SecoendComponent,
   'for':forComponent,
   'footerhtml':footerComponent,
   'daynamic1':daynamic_1Component,
   'daynamic2':daynamic_2Component,
   'getrequest':getRequestComponent,
   'form-html': formComponent
  },
  data () {
    return {
      comp: '',
      daynamicComponent:'Daynamic Component'
     
    }
  }

}




</script>









<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  padding-bottom:25px;
 
}


.vuecss{
  text-align:center;

}
</style>
