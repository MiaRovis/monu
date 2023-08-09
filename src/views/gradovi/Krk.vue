<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Krk</b> <br/></h1>
            Krk is a Croatian island in the northern Adriatic Sea, located near Rijeka in the Bay of Kvarner and part of Primorje-Gorski Kotar county<br/>
            It's tied with Cres as the largest Adriatic island, depending on the methodology used to measure the coastline<br/>
            The most populous island in the Adriatic, with multiple towns and villages that contain a total of 19,383 inhabitants<br/>
             
        </div>


        <div class="row">
        <div class="col">
          <franko/> 
        </div>
        <div class="col order-1">
            <lucija/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <ploča/>
        </div>
        <div class="col order-1">
            <put/>
        </div>
        <div class="col order-5">
            <crkva/>
        </div>
        </div>
        
        
    </div>
    </template>
    
    <script>
    import franko from '@/components/krk/franko.vue';
    import lucija from '@/components/krk/lucija.vue';
    import ploča from '@/components/krk/ploča.vue';
    import crkva from '@/components/krk/crkva.vue';
    import put from '@/components/krk/put.vue';
    
   
    
        
    
    export default{
        name: 'Krk',
        components: {
            franko,
            lucija,
            ploča,
            crkva,
            put
            
            
        },
    };
    
    </script>
    
    <style lang="scss">
    .card{
        margin: 10px;
        background-color:rgb(206, 127, 54);
        
    }

    #iznad{
        margin-top:20px;
        margin-bottom:20px;
        color: rgb(68, 67, 67);
        font-size: 25px;
        text-align: center;
    }
    
    </style>