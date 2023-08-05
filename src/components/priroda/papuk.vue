<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Papuk</p>
    </div>
    
    <div class="card-body p-0">
     <img id="papuk" class="card-img-top" src="@/assets/priroda/papuk.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">Papuk, nature park found in eastern Croatia<br/>
        First geopark in Croatia - very worthy geologic heritage<br/>
        Constits of the most beautiful mountain in Slavonija - Papuk and many habitats for animal and plant species<br/>
        To visit: Papuk nature park, Papuk mountain
    </p>
    </div>

    </div>
    </template>
    
    <script>
    export default{
        name: 'papuk',
    };
    </script>
    
    
    <style lang="scss">
    #papuk{
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