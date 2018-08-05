<template>

  <v-form >
    <v-text-field
      v-model="User.userName"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
      
    ></v-text-field>
    <v-text-field
      v-model="User.userEmail"
      :rules="emailRules"
      label="E-mail"
      required
     
    ></v-text-field>

      <v-btn color="info" class="teal darken-3 white--text" @click="addToApi">Submit</v-btn>
  </v-form>


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

      console.log(newUser);

      axios.post('jsonplaceholder.typicode.com/posts',newUser).then((response)=>{

        console.log(response);
      })
      .catch((error)=>{

        console.log(response);
      });
    }
  }
}

</script>