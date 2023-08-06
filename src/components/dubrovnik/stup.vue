<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Statue of Orlando</p>
    </div>
    
    <div class="card-body p-0">
     <img id="stup" class="card-img-top" src="@/assets/dubrovnik/stup.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"> <b>Statue of Orlando - oldest public sculpture in Dubrovnik</b><br/>
       For a long time, the statue was the only monument in the worl dedicated to a public figure<br/>
       The look of the statue is charachteristial for Germany, and outside of it there are only 4 including this one<br/>
        It's made of stone and shows medieval knight with a sword turned upwards<br/>
        The statue is connected to a legend of a hero Roland who helped fight against Saracens in the 8th century<br/>
        The sword on the statue is a replica because it is easily destroyed by weather and people<br/>
        Today, with a ceremony infront of Orlando and raising of a <i>Libertas</i> flag, on it's statue every year, the summer games are opened
       </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'stup',
    };
    </script>
    
    
    <style lang="scss">
    #stradun{
        height:300px;
        width:450px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>