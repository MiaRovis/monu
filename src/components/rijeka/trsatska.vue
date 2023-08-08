<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Shrine of Our Lady of Trsat</p>
    </div>
    
    <div class="card-body p-0">
     <img id="trsatska" class="card-img-top" src="@/assets/rijeka/trsatska.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Shrine of Our Lady of Trsat</b><br/>
            The Shrine of Our Lady of Trsat is a church on the flat area at the top of Trsat hill and the subject of a legend dating from the 13th century<br/>
            The legend says that In May 1291 Mary's house in Nazareth is said to have appeared here, moved by angels from Nazareth, then mysteriously disappeared later, to be discovered in Italy, in Loreto, where it still stands today as a shrine<br/>
            According to one version the Holy House was brought from the Holy Land by the Crusaders<br/>


        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'trsatska',
    };
    </script>
    
    
    <style lang="scss">
    #trsatska{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>