<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Pula Amphitheatre</p>
    </div>
    
    <div class="card-body p-0">
     <img id="arena" class="card-img-top" src="@/assets/pula/arena.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">opis</p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'arena',
    };
    </script>
    
    
    <style lang="scss">
    #arena{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>