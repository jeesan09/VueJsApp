<template>



  <v-container grid-list-md text-xs-center  >
    <v-layout row wrap >

      <v-flex xs12>
        <v-card dark >
          <v-card-text class="blue lighten-4"><strong>Post Data to Rest Api</strong></v-card-text>
        </v-card>
      </v-flex>


      <v-flex xs12>




  <v-form >
    <v-text-field
      v-model="User.userName"
     
      :counter="10"
      label="Name"
      required
      
    ></v-text-field>
    <v-text-field
      v-model="User.userEmail"

      label="E-mail"
      required
     
    ></v-text-field>

      <v-btn color="info" class="teal darken-3 white--text" @click="addToApi">Submit</v-btn>
  </v-form>




      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>

import axios from 'axios'

export default {

  data () {
    return {
      User:{
        userName:'',
        userEmail:''
      }
  
    }
  },

  methods:{

 

    addToApi(){


       let  newUser={
      name_User:this.User.userName,
      email_User:this.User.userEmail
    }

    //  console.log(newUser);

      axios.post('https://jsonplaceholder.typicode.com/posts',newUser).then((response)=>{

        console.log(response);
      })
      .catch((error)=>{

        console.log(error);
      });
    }
  }
}

</script>