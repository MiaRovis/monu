<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Šibenik</b> <br/></h1>
        Šibenik, historically known as Sebenico, is a historic city in Croatia, located in central Dalmatia, where the river Krka flows into the Adriatic Sea<br/>
        It's a political, educational, transport, industrial and tourist center of Šibenik-Knin County, and is also the third-largest city in the Dalmatian region<br/>
        Unlike other cities along the Adriatic coast, which were established by Greeks, Illyrians and Romans, Šibenik was founded by Croats<br/>
        
    </div>


        <div class="row">
        <div class="col">
          <barone/> 
        </div>
        <div class="col order-5">
            <bunar/>
        </div>
        <div class="col order-1">
            <mihovil/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <perivoj/>
        </div>
        <div class="col order-5">
            <vjecnica/>
        </div>
        <div class="col order-1">
            <nikola/>
        </div>
        </div>        
        
    </div>
    </template>
    
    <script>
    import barone from '@/components/šibenik/barone.vue';
    import bunar from '@/components/šibenik/bunar.vue';
    import mihovil from '@/components/šibenik/mihovil.vue';
    import nikola from '@/components/šibenik/nikola.vue';
    import perivoj from '@/components/šibenik/perivoj.vue';
    import vjecnica from '@/components/šibenik/vjecnica.vue';
    
    export default{
        name: 'Šibenik',
        components: {
            barone,
            bunar,
            mihovil,
            nikola,
            perivoj,
            vjecnica
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