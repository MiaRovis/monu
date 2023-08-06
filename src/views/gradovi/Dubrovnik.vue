<template>
    <div class="container text-center">
        <div id="iznad">
            <h1><b>Dubrovnik</b> - old city in the southern Croatia<br/></h1>
            It is one of the most prominent destinations in the Mediterranean, a seaport and the centre of the Dubrovnik-Neretva County<br/>
            In 1979, the city of Dubrovnik was added to the UNESCO list of World Heritage Sites in recognition of its outstanding medieval architecture and fortified old town, so the whole city can be considered a big monument<br/>
            The famous tv series, Game of Thrones were filmed there, so it is so worthy to visit!
            
        </div>

        <div class="row">
        <div class="col">
          <fontana/> 
        </div>
        <div class="col order-5">
            <kamen/>
        </div>
        <div class="col order-1">
            <minceta/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <zidine/>
        </div>
        <div class="col order-5">
            <samostan/>
        </div>
        <div class="col order-1">
            <stradun/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <stup/>
        </div>
        <div class="col order-5">
            <vlaho/>
        </div>
        <div class="col order-1">
            <katedrala/>
        </div>
        </div>
    
        
    </div>
    </template>
    
    <script>
    import fontana from '@/components/dubrovnik/fontana.vue';
    import kamen from '@/components/dubrovnik/kamen.vue';
    import katedrala from '@/components/dubrovnik/katedrala.vue';
    import minceta from '@/components/dubrovnik/minceta.vue';
    import stradun from '@/components/dubrovnik/stradun.vue';
    import vlaho from '@/components/dubrovnik/vlaho.vue';
    import stup from '@/components/dubrovnik/stup.vue';
    import samostan from '@/components/dubrovnik/samostan.vue';
    import zidine from '@/components/dubrovnik/zidine.vue';

    
    
    export default{
        name: 'Dubrovnik',
        components: {
            fontana,
            kamen,
            katedrala,
            minceta,
            samostan,
            stradun,
            stup,
            vlaho,
            zidine
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