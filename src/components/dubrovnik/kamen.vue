<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Owl head stone - Dubrovnik Maskeron</p>
    </div>
    
    <div class="card-body p-0">
     <img id="kamen" class="card-img-top" src="@/assets/dubrovnik/kamen.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"> <b>Owl head stone - carved, dent stone in the wall that brings good luck</b><br/>
        Found on the left side of a stone wall, just next to the stairs that lead to city walls<br/>
        The stone stands half a meter above the found, sticking out by only 15cm with a surface polished like a marble<br/>
        Legend says that if you manage to stand on top of it, take off your shirt while standing on it facing the wall, luck will follow you<br/>
        It was once the end of a pipe that drained rainwater from the top of the building, when it rains the water comes through its mouth
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'kamen',
    };
    </script>
    
    
    <style lang="scss">
    #kamen{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>