<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Rijeka</b> <br/></h1>
        opis
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
            <trsat/>
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