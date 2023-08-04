<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Lonjsko polje</p>
    </div>
    
    <div class="card-body p-0">
     <img id="lonjsko" class="card-img-top" src="@/assets/lonjsko.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">Lonjsko polje, natural park found in Jasenovac village <br/>
        Largest protected wetland in Croatia and Danube Basin<br/>
        Consists of 3 lakes: Lonjsko, Mokro and Paganovo<br/>
        To visit: Lonjsko polje natural park
        </p>
    </div>

    </div>
    </template>
    
    <script>
    export default{
        name: 'lonjsko',
    };
    </script>
    
    
    <style lang="scss">
    #lonjsko{
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