<template>
    <div>
      <div>
        <h3 id="naslov2">List of your saved monuments</h3>
        <ul>
          <li v-for="favorite in favorite" :key="favorite.id">
            <img :src="favorite.image" alt="Monument">
            <p>{{ favorite.name }}</p>
            <br/>
            <p>{{ favorite.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
<script>
import { Auth, addMonuments } from '@/service';

export default{
    name: 'myfavorites',
    data() {
        return{
            auth: Auth.state,
            favorite: [],
        };
    },
    methods: {
        async fetchfavorite() {
            try {
                this.favorite = await addMonuments.lista3(this.auth.userEmail);
            } catch (error) {
                console.error('Neuspjeli dohvat fotografije:', error);
            }
        },

         async created(){
            this.fetchfavorite();
        }
    },
};

</script>

<style lang="scss">
#naslov2{
    font-size:medium;
    
}

</style>