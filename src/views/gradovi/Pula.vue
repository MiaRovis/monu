<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Pula</b> - the largest city in Istria county<br/></h1>
        Situated at the southern tip of Istrian peninsula, most known for its multitde of ancient Roman buildings<br/>
        Most famous monument in Pula is its Arena, best preserved Roman amphitheatre<br/>
        Down below are some of the most preserved monuments from Roman ages, but there is so much more to explore<br/>
        It's a city very worthy of visiting!
        </div>


        <div class="row">
        <div class="col">
          <vrata/> 
        </div>
        <div class="col order-5">
            <hram/>
        </div>
        <div class="col order-1">
            <arena/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <tuneli/>
        </div>
        <div class="col order-5">
            <herkul/>
        </div>
        <div class="col order-1">
            <dvojna/>
        </div>
        </div>        
        
    </div>
    </template>
    
    <script>
    import arena from '@/components/pula/arena.vue';
    import dvojna from '@/components/pula/dvojna.vue';
    import hram from '@/components/pula/hram.vue';
    import vrata from '@/components/pula/vrata.vue';
    import herkul from '@/components/pula/herkul.vue';
    import tuneli from '@/components/pula/tuneli.vue';
        
    
    export default{
        name: 'Natural',
        components: {
            arena,
            dvojna,
            hram,
            vrata,
            herkul,
            tuneli
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