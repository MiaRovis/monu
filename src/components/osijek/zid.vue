<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">City walls and water gate</p>
    </div>
    
    <div class="card-body p-0">
     <img id="zid" class="card-img-top" src="@/assets/osijek/zid.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>City walls and the water gate - entrance to the city's old center Tvrđa</b><br/>
           The name "Water gate" comes from the fact that they lead to the river Drava<br/>
           They are found inside the walls of Tvrđa<br/>


        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'zid',
    };
    </script>
    
    
    <style lang="scss">
    #zid{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>