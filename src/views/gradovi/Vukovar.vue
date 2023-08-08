<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Vukovar</b> <br/></h1>
        Vukovar is a hero city in the eastern region of Slavonia<br/>
        It contains Croatia's largest river port, located at the confluence of the Vuka and the Danube<br/>
        The name Vukovar means town on the Vuka River<br/>
        The town is very special to Croatians because it is the first town to be attacked in the war<br/>
        The town holds many special monuments one of which is a statue of Croatian independence and victory
        </div>


        <div class="row">
        <div class="col">
          <crkvafj/> 
        </div>
        <div class="col order-5">
            <dom/>
        </div>
        <div class="col order-1">
            <eltz/>
        </div>
        </div>
    
        <div class="row">
        <div class="col">
            <toranj/>
        </div>
        <div class="col order-5">
            <mostv/>
        </div>
        </div>        
        
    </div>
    </template>
    
    <script>
    import crkvafj from '@/components/vukovar/crkvafj.vue';
    import dom from '@/components/vukovar/dom.vue';
    import eltz from '@/components/vukovar/eltz.vue';
    import mostv from '@/components/vukovar/mostv.vue';
    import toranj from '@/components/vukovar/toranj.vue';
   
    
  
    
    export default{
        name: 'Vukovar',
        components: {
            crkvafj,
            dom,
            eltz,
            mostv,
            toranj
            
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