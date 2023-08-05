<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Augustus temple</p>
    </div>
    
    <div class="card-body p-0">
     <img id="hram" class="card-img-top" src="@/assets/pula/hram.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">opis</p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'hram',
    };
    </script>
    
    
    <style lang="scss">
    #hram{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>