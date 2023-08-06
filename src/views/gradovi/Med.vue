<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Medvedgrad</b>- old town built in 13th century <br/></h1>
        It is a medieval fortified town located on the south slopes of Medvednica mountain, approximately halfway from the Croatian capital Zagreb to the mountain top Sljeme<br/>
        In 1242, Mongols invaded Zagreb and the city was destroyed and burned to the ground what prompted the building of Medvedgrad<br/>
        For defensive purposes it was built on a hill, Mali Plazur, that is a spur of the main ridge of the mountain that overlooks the city<br/>
        On a clear day the castle can be seen from far away, especially the high main tower
    
    </div>


        <div class="row">
        <div class="col">
          <oltar/> 
        </div>
        <div class="col order-5">
            <rudnik/>
        </div>
        </div>
         
        
    </div>
    </template>
    
    <script>
    import oltar from '@/components/medvedgrad/oltar.vue';
    import rudnik from '@/components/medvedgrad/rudnik.vue';
        
    
    export default{
        name: 'Med',
        components: {
            oltar,
            rudnik
            
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