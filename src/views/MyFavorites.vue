<template>
    <div>
      <div>
        <h3 id="naslov2">List of your favorite monuments:</h3>
        <ul>
          <li v-for="favorite in favorite" :key="favorite._id">
            <p id="naziv5">{{ favorite.name }}</p>
            <img :src="favorite.image" alt="Monument" width="30%">
            <br/>
            <p id="naziv5">{{ favorite.description }}</p>
            <button @click="removefavorite(favorite.image, favorite._id)" class="btn-btn-primary">
            Remove from favorites
          </button>
          </li>
          
        </ul>
        
      </div>
    </div>
  </template>
  
<script>

import { Auth, addMonuments } from '@/service';

export default{
    name: 'Myfavorites',
    data() {
        return{
            auth: Auth.state,
            favorite: [],
        };
    },
    created(){
        this.fetchfavorite();
    },
    methods: {
        async fetchfavorite() {
            try {
                const favorite = await addMonuments.lista3(this.auth.userEmail);
                this.favorite = favorite.data;
             
            } catch (error) {
                console.error('Neuspjeli dohvat fotografije:', error);
            }
        },

        async removefavorite(slika, id){
          try{
            let imageremove = btoa(slika)
            await addMonuments.lista4(imageremove);
            console.log("Removed photo with id: ", id);

            this.favorite=this.favorite.filter(favorite => favorite._id !==id);

          } catch(error){
            console.error("Error: ", error);
          }
        }
  
    },

};

</script>

<style lang="scss">
#naslov2{
    font-size: 25px;
    margin-left:40px;
    margin-top:40px;
    margin-bottom:40px;
    color:rgb(114, 55, 13);
}
#naziv5{
  margin-left: 55px;
  font-size:20px;
  color:black;

}
</style>