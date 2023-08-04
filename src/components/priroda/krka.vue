<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Slapovi Krke</p>
    </div>
    
    <div class="card-body p-0">
     <img id="krka" class="card-img-top" src="@/assets/krka.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">National park Krka, found alongside Krka river in Šibensko-Kninska county<br/>
        Formed to protect Krka river and intended for scientific, recreational and cultural activities<br/>
        To visit: Krka falls
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'krka',
    };
    </script>
    
    
    <style lang="scss">
    #krka{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>