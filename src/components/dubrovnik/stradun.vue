<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Stradun</p>
    </div>
    
    <div class="card-body p-0">
     <img id="stradun" class="card-img-top" src="@/assets/dubrovnik/stradun.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"> <b>Stradun - main street in old town Dubrovnik</b><br/>
       The street stretches 300m in east-west direction, and is places between two city gates<br/>
       Stradun became the city's main thoroughfare in the 13th century, and its current appearance was for the most part created following the devastating 1667 earthquake in which most of the buildings were destroyed<br/>
       Many of the historic buildings and monuments in Dubrovnik are situated along the Stradun<br/>
       A procession for the Feast of Saint Blaise, the patron saint of Dubrovnik, passes through Stradun every year on 3 February        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'stradun',
    };
    </script>
    
    
    <style lang="scss">
    #stradun{
        height:300px;
        width:450px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>