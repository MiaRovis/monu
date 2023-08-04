<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Vransko jezero</p>
    </div>
    
    <div class="card-body p-0">
     <img id="vransko" class="card-img-top" src="@/assets/vransko.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">Vransko jezero nature park, found in Zadarska, Šbensko-Kninska county, one of 12 croatias nature parks<br/>
        Founded in 1999, constits of Vransko lake and surroundings, surface of 57km2<br/>
        Biggest natural lake in Croatia, karst field filled with water and rare example of criptodepression<br/>
        There are 235 found species of birds found, 102 of which are residents and the rest migratory birds<br/>
        To visit: Vransko jezero nature park
        
        </p>
    </div>

    </div>
    </template>
    
    <script>
    export default{
        name: 'vransko',
    };
    </script>
    
    
    <style lang="scss">
    #vransko{
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