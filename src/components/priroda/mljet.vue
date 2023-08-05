<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Mljet</p>
    </div>
    
    <div class="card-body p-0">
     <img id="mljet" class="card-img-top" src="@/assets/priroda/mljet.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">Mljet island, found in Dalmatia, 8th largest island in Croatia<br/>
        National park Mljet consists of: western part of the island, Veliko jezero, Malo jezero and Soline bay<br/>
         To visit: National park Mljet
        </p>
    </div>

    </div>
    </template>
    
    <script>
    export default{
        name: 'mljet',
    };
    </script>
    
    
    <style lang="scss">
    #mljet{
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