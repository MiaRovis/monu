<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Krk</b> <br/></h1>
            
        </div>


        <div class="row">
        <div class="col">
          <franko/> 
        </div>
        <div class="col order-5">
            <jakov/>
        </div>
        <div class="col order-1">
            <lucija/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <ploča/>
        </div>
        <div class="col order-5">
            <samkrk/>
        </div>
        </div>
        
        
    </div>
    </template>
    
    <script>
    import franko from '@/components/krk/franko.vue';
    import jakov from '@/components/krk/jakov.vue';
    import lucija from '@/components/krk/lucija.vue';
    import ploča from '@/components/krk/ploča.vue';
    import samkrk from '@/components/krk/samkrk.vue';
   
    
        
    
    export default{
        name: 'Krk',
        components: {
            franko,
            jakov,
            lucija,
            ploča,
            samkrk
            
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