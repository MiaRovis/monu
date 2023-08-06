<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Trogir</b> <br/></h1>
        opis
        </div>


        <div class="row">
        <div class="col">
          <ciovo/> 
        </div>
        <div class="col order-5">
            <gospa/>
        </div>
        <div class="col order-1">
            <kastelk/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <lovre/>
        </div>
        <div class="col order-5">
            <palacat/>
        </div>
        <div class="col order-1">
            <plantan/>
        </div>
        </div>        
        
    </div>
    </template>
    
    <script>
    import ciovo from '@/components/trogir/ciovo.vue';
    import gospa from '@/components/trogir/gospa.vue';
    import kastelk from '@/components/trogir/kastelk.vue';
    import lovre from '@/components/trogir/lovre.vue';
    import palacat from '@/components/trogir/palacat.vue';
    import plantan from '@/components/trogir/plantan.vue';
    
  
    
    export default{
        name: 'Trogir',
        components: {
            ciovo,
            gospa,
            kastelk,
            lovre,
            palacat,
            plantan
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