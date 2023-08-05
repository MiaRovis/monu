<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Zerostrasse tunnels</p>
    </div>
    
    <div class="card-body p-0">
     <img id="tuneli" class="card-img-top" src="@/assets/pula/tuneli.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">opis</p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'tuneli',
    };
    </script>
    
    
    <style lang="scss">
    #tuneli{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>