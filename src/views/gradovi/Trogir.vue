<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Trogir</b> <br/></h1>
            Trogir,  historically known as Traù, is a historic town and harbour on the Adriatic coast in Split-Dalmatia County, Croatia<br/>
            The historic city of Trogir is situated on a small island between the Croatian mainland and the island of Čiovo<br/>
            Since 1997, the historic centre of Trogir has been included in the UNESCO list of World Heritage Sites for its Venetian architecture<br/>

        </div>


        <div class="row">
        <div class="col">
          <ciovo/> 
        </div>
        <div class="col order-5">
            <lovre/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <kastelk/>
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
    import ciovo from '@/components/trogir/ciovo.vue'
    import kastelk from '@/components/trogir/kastelk.vue';
    import lovre from '@/components/trogir/lovre.vue';
    import palacat from '@/components/trogir/palacat.vue';
    import plantan from '@/components/trogir/plantan.vue';
    
  
    
    export default{
        name: 'Trogir',
        components: {
            ciovo,
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