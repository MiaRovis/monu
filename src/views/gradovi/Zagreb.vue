<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Zagreb</b> <br/></h1>
        opis
        </div>


        <div class="row">
        <div class="col">
          <kamena/> 
        </div>
        <div class="col order-5">
            <kip/>
        </div>
        <div class="col order-1">
            <kazaliste/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <mirogoj/>
        </div>
        <div class="col order-5">
            <usp/>
        </div>
        <div class="col order-1">
            <marko/>
        </div>
        </div>        
        
    </div>
    </template>
    
    <script>
    import kamena from '@/components/zagreb/kamena.vue';
    import kip from '@/components/zagreb/kip.vue';
    import kazaliste from '@/components/zagreb/kazaliste.vue';
    import mirogoj from '@/components/zagreb/mirogoj.vue';
    import usp from '@/components/zagreb/usp.vue';
    import marko from '@/components/zagreb/marko.vue';
    
    export default{
        name: 'Zagreb',
        components: {
            kamena,
            kip,
            kazaliste,
            mirogoj,
            usp,
            marko
            
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