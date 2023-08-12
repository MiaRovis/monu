<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Land gate</p>
    </div>
    
    <div class="card-body p-0">
     <img id="kopnena" class="card-img-top" src="@/assets/zadar/kopnena.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Land gate</b><br/>
           The gate was built 1543 in the port of Foša, and was then the main entrance to the city<br/>
           Above the gate is a triumphal arch with a passage for vehicles and two smaller passages for pedestrians on each side<br/>
           The land gate is decorated with various scenes: the city coat of arms depicting St. Carved on horseback, the coat of arms of the Venetian Republic of Veneto depicting the lion of St. Marko and some others<br/>
           Today, they bear witness to the Renaissance influence of that historical period, and are considered one of the most beautiful monuments from the era of Venetian rule in Dalmatia<br/>
        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'kopnena',
    };
    </script>
    
    
    <style lang="scss">
    #kopnena{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>