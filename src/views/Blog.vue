<template>
    <div>
    <div id="prvidiv" class="content">
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
        <div id="objave" class="image-list">
      <div v-for="image in images" :key="image.id">
        <img :src="image.image" alt="Monument" id="slike">
       <div id="card-footer text-muted text-left">
       {{ image.name }}
       <br/>
       {{ image.description }}
       <br/>
       <button id="sl" @click="addToFavorites(favorite.name, favorite.image, favorite.description)" class="btn-btn-primary">
                  Add to Favorites
        </button>

      </div>
      </div>

    </div>
    </div>
</template>

<script>
import { Auth, addMonuments } from '@/service';

export default{
    name: 'Blog',
    data(){
        return{
            monuData: {
                name:'',
                image:'',
                description:'',
            },
            images: [],
            favorite: [],
            auth: Auth,
        };
    },
    created(){
        this.fetchImages();
    },
    methods: {
        async addPost(){
            if(
                this.monuData.name === "" ||
                this.monuData.image === "" ||
                this.monuData.description === ""
            ){
                return;
            } 
            await addMonuments.addPost(this.monuData);
            
                 this.monuData.name = "";
                 this.monuData.image = "";
                 this.monuData.description = "";
                        
                 this.fetchImages();
        },
                 async fetchImages(){
                    const images = await addMonuments.getData();

                    this.images = images;
                 
        },
        async addToFavorites(name, image, description){
            let MonuList = {
                name: name,
                image: image,
                description: description,
                user: this.auth.state.userEmail,
            };
            await addMonuments.lista2(MonuList);
            this.fetchfavorite();
            
        },        
        async created() {
        this.favorite = await addMonuments.lista3(this.auth.userEmail);
}   
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

#slike{
    width:350px;
    height:300px;
}
#objave{
    text-align: center;
    color:black;
    float:right;
    margin-right:25%;
    margin-top:2%;
}
#prvidiv{
    float:left;
}
#sl{
    margin-bottom:10px;
    color:black;
}
</style>