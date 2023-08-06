<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Zadar</b> <br/></h1>
        opis
        </div>


        <div class="row">
        <div class="col">
          <bunari/> 
        </div>
        <div class="col order-5">
            <donat/>
        </div>
        <div class="col order-1">
            <kopnena/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <orgulje/>
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