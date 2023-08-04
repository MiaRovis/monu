<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Plitvička jezera</p>
    </div>
    
    <div class="card-body p-0">
     <img id="plitvice" class="card-img-top" src="@/assets/plitvice.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">National park Plitvička jezera, found in Ličko-Senjska county<br/>
        Biggest, oldest and most visited national park in Croatia.<br/>
        Announced by UNESCO as worlds natural heritage in 1979., amoung firsts in the world <br/>
        Consist of amazing natural beauty, 16 lakes of light blue water and waterfalls<br/>
        To visit: Nation park Plitvička jezera, Plitvička jezera waterfalls
        
        </p>
    </div>

    </div>
    </template>
    
    <script>
    export default{
        name: 'plitvice',
    };
    </script>
    
    
    <style lang="scss">
    #plitvice{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    .card{
        margin:10px;
    }
    
     </style>