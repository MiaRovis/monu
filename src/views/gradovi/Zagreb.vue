<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Zagreb</b> <br/></h1>
        Zagreb is the capital and largest city of Croatia<br/>
        It is located in the northwest of the country, along the Sava river, at the southern slopes of the Medvednica mountain<br/>
        Zagreb stands near the international border between Croatia and Slovenia at an elevation of approximately 122 m above sea level<br/>
        It is a city with a rich history dating from Roman times<br/>
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
            <marko/>
        </div>
        <div class="col order-5">
            <usp/>
        </div>
        </div>        
        
    </div>
    </template>
    
    <script>
    import kamena from '@/components/zagreb/kamena.vue';
    import kip from '@/components/zagreb/kip.vue';
    import kazaliste from '@/components/zagreb/kazaliste.vue';
    import usp from '@/components/zagreb/usp.vue';
    import marko from '@/components/zagreb/marko.vue';
    
    export default{
        name: 'Zagreb',
        components: {
            kamena,
            kip,
            kazaliste,
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