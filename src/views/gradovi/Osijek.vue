<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Osijek</b> <br/></h1>
        Osijek is is the fourth-largest city in Croatia, with a population of 96,848<br/>
        It is the largest city and the economic and cultural centre of the eastern Croatian region of Slavonia, as well as the administrative centre of Osijek-Baranja County<br/>
        The name was given to the city due to its position on elevated ground, which prevented the city being flooded by the local swamp waters<br/>
        Numerous events take place in the city throughout the year the most important being the Croatian Tambura Music Festival in May and Osijek Summer Nights during June, July and August
       The city has many amazing monuments which of some are shown below!
    </div>


        <div class="row">
        <div class="col">
          <konkat/> 
        </div>
        <div class="col order-5">
            <most/>
        </div>
        <div class="col order-1">
            <trg/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <tvrda/>
        </div>
        <div class="col order-5">
            <zid/>
        </div>
        </div>        
        
    </div>
    </template>
    
    <script>
    import konkat from '@/components/osijek/konkat.vue';
    import most from '@/components/osijek/most.vue';
    import trg from '@/components/osijek/trg.vue';
    import tvrda from '@/components/osijek/tvrda.vue';
    import zid from '@/components/osijek/zid.vue';

   
        
    
    export default{
        name: 'Osijek',
        components: {
            konkat,
            most,
            trg,
            tvrda,
            zid
            
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