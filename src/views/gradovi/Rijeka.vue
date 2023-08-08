<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Rijeka</b> <br/></h1>
            Rijeka is the principal seaport and the third-largest city in Croatia<br/>
            It is located in Primorje-Gorski Kotar County on Kvarner Bay, an inlet of the Adriatic Sea and in 2021 had a population of 108,622 inhabitants<br/>
            The city's economy largely depends on shipbuilding and maritime transport<br/>
            Historically, because of its strategic position and its excellent deep-water port, the city was fiercely contested, especially between the Holy Roman Empire, Italy and Croatia, changing rulers and demographics many times over centuries<br/>

        </div>


        <div class="row">
        <div class="col">
          <kruzic/> 
        </div>
        <div class="col order-5">
            <lurdska/>
        </div>
        <div class="col order-1">
            <trsat/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <muzej/>
        </div>
        <div class="col order-5">
            <ura/>
        </div>
        <div class="col order-1">
            <trsatska/>
        </div>
        </div>        
        
    </div>
    </template>
    
    <script>
    import kruzic from '@/components/rijeka/kruzic.vue';
    import lurdska from '@/components/rijeka/lurdska.vue';
    import muzej from '@/components/rijeka/muzej.vue';
    import trsat from '@/components/rijeka/trsat.vue';
    import trsatska from '@/components/rijeka/trsatska.vue';
    import ura from '@/components/rijeka/ura.vue';
     
    export default{
        name: 'Rijeka',
        components: {
            kruzic,
            lurdska,
            muzej,
            trsat,
            trsatska,
            ura
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