<template>
    <div class="about">
    <div class="container">
    <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
    <br/>

    <form @submit.prevent="login">
    <div class="form-group">
    <p id="admin"><b>Log-In</b></p>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    

    <div id="loz" class="form-group">
    <label for="exampleInputPassword2">Password</label>
    <br/>
    <input type="password"  class="form-control" id="exampleInputPassword1" placeholder="Password" />
    <br/>
    </div>
 
    <button type="submit"  class="btn btn-secondary">Submit</button>
    <br/>
    
    </form>
    </div>
    <div class="col-sm"></div>
    </div>
    </div>
    </div>
    </template>

<script>
import { Auth } from '@/service';
import store from '@/store';

export default {
    data() {
        return{
            store,
            email:'',
            password:'',
        };
    },
    methods: {
         async login() {
            let success = await Auth.login(this.email, this.password);
            console.log("Rezultat prijave", success);

            if(success == true){
            
            store.authenticated = true;
            store.email=this.email;
            this.$router.push({path:'home'})
            .then(() => {
              this.$router.go();
            });
        console.log('Login result', success);

        }
        console.log("Authenticated: ",store.authenticated)
      },
  }
};


</script>

<style lang="scss">

#admin{
    font-size:30px;
    color:rgb(23, 23, 24);
    
}


</style>