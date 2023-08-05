<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Double door</p>
    </div>
    
    <div class="card-body p-0">
     <img id="dvojna" class="card-img-top" src="@/assets/pula/dvojna.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">opis</p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'dvojna',
    };
    </script>
    
    
    <style lang="scss">
    #dvojna{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>