<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Kopački rit</p>
    </div>
    
    <div class="card-body p-0">
     <img id="kopacki" class="card-img-top" src="@/assets/priroda/kopacki.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">
        Kopački rit, nature park found in eastern Croatia - Baranja<br/>
        One of the most important, largest and preserved wetland in Europe<br/>
        To visit: Kopački rit wetlands
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'kopacki',
    };
    </script>
    
    
    <style lang="scss">
    #kopacki{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>