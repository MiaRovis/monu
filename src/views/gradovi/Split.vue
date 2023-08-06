<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Split</b> <br/></h1>
        opis
        </div>


        <div class="row">
        <div class="col">
          <diokl/> 
        </div>
        <div class="col order-5">
            <grgur/>
        </div>
        <div class="col order-1">
            <hnkst/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <podrumist/>
        </div>
        <div class="col order-5">
            <porta/>
        </div>
        <div class="col order-1">
            <porta2/>
        </div>
        </div>        
        
    </div>
    </template>
    
    <script>
    import diokl from '@/components/split/diokl.vue';
    import grgur from '@/components/split/grgur.vue';
    import hnkst from '@/components/split/hnkst.vue';
    import podrumist from '@/components/split/podrumist.vue';
    import porta from '@/components/split/porta.vue';
    import porta2 from '@/components/split/porta2.vue';
  
    
    export default{
        name: 'Split',
        components: {
            diokl,
            grgur,
            hnkst,
            podrumist,
            porta,
            porta2
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