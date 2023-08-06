<template>

    <div class="container text-center">
        <div id="iznad">
            <h1><b>Poreč</b>- a small city located on the west of Istrian penninsula <br/></h1>
            There are 8 different roads leading to the city from the surrounding villages<br/>
            The coast around the city is separated, consisting of small islands, capes and bays<br/>
            There is a famous monument in Poreč - Euphrasian Basilica which is the cathedral of the Assumption of Mary
        </div>


        <div class="row">
        <div class="col">
          <bazilika/> 
        </div>
        <div class="col order-5">
            <bazilika2/>
        </div>
        </div>
        
        
    </div>
    </template>
    
    <script>
    import bazilika from '@/components/poreč/bazilika.vue';
    import bazilika2 from '@/components/poreč/bazilika2.vue';
    
        
    
    export default{
        name: 'Poreč',
        components: {
            bazilika,
            bazilika2
            
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