<template>
    <div class="about">
    <div class="container">
    <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
    <br/>

    <form @submit.prevent="registerUser">
    <div class="form-group">
    <p id="admin"><b>Sign-up</b></p>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <p id="mail">We'll never share you e-mail with anyone else.</p>
    </div>

    <div id="loz" class="form-group">
    <label for="exampleInputPassword2">Password</label>
    <br/>
    <input  type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>

    <div id="loz" class="form-group">
    <label for="exampleInputPassword2">Repeat password</label>
    <br/>
    <input  type="passwordRepeat" v-model="password" class="form-control" id="exampleInputPassword2" placeholder="Password" /><br/>
    </div>
 
    <button type="submit" class="btn btn-secondary">Submit</button>
    <br/>
    
    </form>
    </div>
    <div class="col-sm"></div>
    </div>
    </div>
    </div>
    </template>

<script>
import store from '@/store';
import { Auth } from '@/service';

export default{
    name: "registerUser",
    data() {
        return{
            store,
            email:'',
            password:'',
            
        };
    },
    methods: {
       
        async registerUser(){
            if (this.email=='' || this.password==''){
            }
            
        else{
            let userData = {
                email:this.email, 
                password:this.password,
            }
            await Auth.login(userData).then(() => {
                this.$router.push({ path: '/auth' });
                store.authenticated=true;
                store.currentUserEmail=this.email;
            });

            }
        },
    },


};


</script>

<style lang="scss">
#admin{
    font-size:30px;
    color:rgb(18, 18, 19);
}
#loz{
    margin-top:10px;
}
#log{
    font-size:18px;
    color:rgb(66, 64, 64);
    margin-left:40%;
}
#pass,#mail{
    color:rgb(230, 54, 54);
    margin-bottom:0px;
}

</style>