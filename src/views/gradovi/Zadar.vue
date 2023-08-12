<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Zadar</b> <br/></h1>
       Zadar, historically known as Zara,  is the oldest continuously inhabited city in Croatia<br/>
       It is situated on the Adriatic Sea, at the northwestern part of Ravni Kotari region<br/>
       Zadar serves as the seat of Zadar County and of the wider northern Dalmatian region<br/>
       The city proper covers 25 km2 with a population of 75,082 in 2011, making it the second-largest city of the region of Dalmatia and the fifth-largest city in the country<br/>
       UNESCO's World Heritage Site list included the fortified city of Zadar as part of Venetian Works of Defence between 15th and 17th centuries: Stato da Terra – western Stato da Mar in 2017<br/>
       Today, Zadar is a historical center of Dalmatia, Zadar County's principal political, cultural, commercial, industrial, educational, and transportation centre
    </div>


        <div class="row">
        <div class="col">
          <bunari/> 
        </div>
        <div class="col order-5">
            <orgulje/>
        </div>
        <div class="col order-1">
            <kopnena/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <donat/>
        </div>
        <div class="col order-5">
            <rimskif/>
        </div>
        <div class="col order-1">
            <sunce/>
        </div>
        </div>        
        
    </div>
    </template>
    
    <script>
    import bunari from '@/components/zadar/bunari.vue';
    import donat from '@/components/zadar/donat.vue';
    import kopnena from '@/components/zadar/kopnena.vue';
    import orgulje from '@/components/zadar/orgulje.vue';
    import rimskif from '@/components/zadar/rimskif.vue';
    import sunce from '@/components/zadar/sunce.vue';
    
    
    export default{
        name: 'Zadar',
        components: {
            bunari,
            donat,
            kopnena,
            orgulje,
            rimskif,
            sunce
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