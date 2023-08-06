<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Osijek</b> <br/></h1>
        opis
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
            <vjenac/>
        </div>
        <div class="col order-1">
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
    import vjenac from '@/components/osijek/vjenac.vue';
    import zid from '@/components/osijek/zid.vue';

   
        
    
    export default{
        name: 'Osijek',
        components: {
            konkat,
            most,
            trg,
            tvrda,
            vjenac,
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