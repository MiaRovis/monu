<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Brijuni</p>
    </div>
    
    <div class="card-body p-0">
     <img id="brijuni" class="card-img-top" src="@/assets/priroda/brijuni.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">Brijuni islands, Istrian island group, found in Istria county.<br/>
             Contains 2 big islands and 12 small ones <br/>
             To visit: National Park Brijuni, Brijuni natural zoo
        
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'brijuni',
    };
    </script>
    
    
    <style lang="scss">
    #brijuni{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>