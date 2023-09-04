<template>
  <div id="pozadina" style="background:rgb(248, 159, 76);">
  
    <div id="app">
      <nav id="nav1">
      <nav class="navbar navbar-expand-lg navbar-light">
  
        <div class="container-fluid" id="nav2">
          <p id="naziv"><b>Monu</b></p> 
  
          <div class="collapse navbar-collapse" id="navbarToggledDemo02">
            <ul class="navbar-nav ml-auto">
              <router-link id="link" to="/About">About Us</router-link>
              <router-link v-if="authenticated" id="link" to="/Cities">Cities</router-link>
              <router-link v-if="authenticated" id="link" to="/Natural">Natural beauties</router-link>
              <router-link v-if="authenticated" id="link" to="/Blog">Blog</router-link>
              <router-link v-if="authenticated" id="link" to="/MyFavorites">My Favorites</router-link>
              <router-link v-if="!authenticated" id="link" to="/Login">Login</router-link>
              <router-link v-if="!authenticated" id="link" to="/Signup">Signup</router-link>
              <a id="logo" v-if="authenticated" href="#" @click="logout()">Log out </a>
              </ul>
  
          </div>
        </div>
      </nav>
      </nav>
  
    <router-view/> 
    </div>
  </div>      
  </template>
  
  <script>

  import store from '@/store';
  import { Auth } from '@/service/index.js';
  

  document.body.style.backgroundColor="rgb(248, 159, 76)";

  export default{
    data() {
      return{
        varijabla: 1,
      };
    },
    
    computed: {
    authenticated() {
      return Auth.state.authenticated;
    },
    userEmail() {
      return Auth.state.userEmail;
    },

    },

    methods: {
      logout(){
      Auth.logout();
      this.$router.push({path:'/about'});
      },
    },
  };

</script>


  <style lang="scss">
  
  #app{
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  }
  
  #nav1{
  padding: 30px;
  background-color: rgb(206, 127, 54);
  }
  
  #naziv{
    text-align: center;
    font-size: 55px;
    margin: 30px 30px 50px 10px;
  }
  
  #link{
    color: rgb(68, 67, 67);
    margin-left:50px;
    font-size: 25px;
    font-family:'Times New Roman', Times, serif;
  }

  #logo{
    color: rgb(68, 67, 67);
    margin-left:50px;
    font-size: 25px;
    font-family:'Times New Roman', Times, serif;
  }

 
  
  </style>
  