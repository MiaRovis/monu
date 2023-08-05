<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Risnjak</p>
    </div>
    
    <div class="card-body p-0">
     <img id="risnjak" class="card-img-top" src="@/assets/priroda/risnjak.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">National Park Risnjak, found in Gorski kotar, founded in 1953.<br/>
        Beautiful example of breakdown of Dinara mountain group in geo, hydro and climatic view.<br/>
        Consists of two zones: strict and medium strict protection - in strict zone there are many rare natural beauties which is why its very protected<br/>
        To visit: National Park Risnjak, Risnjak mountains
        </p>
    </div>

    </div>
    </template>
    
    <script>
    export default{
        name: 'risnjak',
    };
    </script>
    
    
    <style lang="scss">
    #risnjak{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    .card{
        margin:10px;
    }
    
     </style>