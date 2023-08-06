<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Minčeta fortress</p>
    </div>
    
    <div class="card-body p-0">
     <img id="minceta" class="card-img-top" src="@/assets/dubrovnik/minceta.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"> <b>Minčeta fortress - one of 4 fortresses of Dubrovnik city walls</b><br/>
        It is a standing point of Dubrovnik defence system towards the land<br/>
        Alongside of St. Vlaho, it's its own king of symbol of Dubrovnik<br/>
        The fortress is a big round tower, founded on strong and wide walls<br/>
        From its top, as the highest point of city walls, there is a spectacular view of the city and its position from the mountains and the open sea 

        
        
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'minceta',
    };
    </script>
    
    
    <style lang="scss">
    #minceta{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>