<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Golden Gate</p>
    </div>
    
    <div class="card-body p-0">
     <img id="porta" class="card-img-top" src="@/assets/split/porta.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Golden Gate</b><br/>
            They are one of the four principal Roman gates into the old town of Split<br/>
           Built as part of Diocletian's Palace, it served as the main gate through which the Emperor entered the complex and was elaborately decorated to mark its status<br/>
           Over the course of the Middle Ages, the gate was sealed off and lost its columns and statuary; It was reopened and repaired in modern times<br/>
           The gate stood at a terminal point of the road which led north towards Salona, Diocletian's birthplace and the capital of the Roman province of Dalmatia<br/>
           In the Middle Ages, its name was changed to Porta Romae, the name "Golden Gate" seems to date from the Renaissance, making its first appearance in the 1553 itinerary of the Venetian trade unions Died and Giustiniana<br/>

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'porta',
    };
    </script>
    
    
    <style lang="scss">
    #porta{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>