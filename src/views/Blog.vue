<template>
    <div>
    <div class="content">
        <h2 id="prvo"><b>How to publish</b></h2>
        <br>
        <form @sumbit.prevent="addMonuments">

        <p id="drugo">Firstly, make sure you name your post: </p>
        <div id="opis2" class="form-group">
            
            <input 
            v-model="monuData.name" 
            type="text" 
            placeholder="Monument name"
            id="MonuName">
        </div>
        <br/>

        <p id="drugo">Secondly, make sure you add a matching url: </p>
        <div id="opis2" class="form-group">
            <input 
            v-model="monuData.image" 
            type="text" 
            id="MonuPhoto" 
            placeholder="Monument photo ULR">
        </div>
        <br/>

        <p id="drugo">Lastly, make sure you add a description of the monument its location: </p>
        <div id="opis2" class="form-group"></div>
            <textarea v-model="monuData.description" 
            id="MonuDesc" 
            placeholder="Description"
            rows="2"></textarea>
        
        <div class="input-group">
            <button id="batn" type="submit" @click="addPost()"  class="btn btn-secondary">Submit</button>
        </div>
        
        </form>

        </div>
    </div>
</template>

<script>
import { addMonuments } from '@/service';

export default{
    data(){
        return{
            monuData: {
                name:'',
                image:'',
                description:''
            },
        };
    },
    methods: {
        async addPost(){
            if(
                this.monuData.name === "" ||
                this.monuData.image === "" ||
                this.monuData.description === ""
            ){
            } else {
                    await addMonuments.addPost(this.monuData);
                    this.monuData.name = "";
                    this.monuData.image = "";
                    this.monuData.description = "";
                
                	}
        },
    },
};

</script>

<style>
#prvo{
    text-align:left;
    margin-left:50px;
    margin-top:25px;
    color:rgb(145, 63, 5);
}
#drugo{
    text-align:left;
    margin-left:50px;
    margin-top:15px;
    color:rgb(66, 32, 7);
    font-size: large;
}
#MonuName{
    margin-left:50px;

}
#MonuPhoto{
    margin-left:50px;
}
#MonuDesc{
    margin-left:50px;

}
#batn{
    margin-left:50px;
    margin-top:20px;
}
</style>