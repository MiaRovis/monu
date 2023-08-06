<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Big Onophrius fountain</p>
    </div>
    
    <div class="card-body p-0">
     <img id="fontana" class="card-img-top" src="@/assets/dubrovnik/fontana.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"> <b>Onophrius fountain - beautiful fountain in the middle of Dubrovnik</b><br/>
        It was made by an italian builder Onofrio della Cava in 1438. as a part of Dubrovnik waterworks<br/>
        In its original form, it was very richly decorated but due to an earthquake in 1667. it has come down to todays look<br/>
        The shape is poligonal with 16 different water sources
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'fontana',
    };
    </script>
    
    
    <style lang="scss">
    #fontana{
        height:300px;
        width:350px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>