<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Zrinski Mine</p>
    </div>
    
    <div class="card-body p-0">
     <img id="rudnik" class="card-img-top" src="@/assets/medvedgrad/rudnik.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Zrinski Mine - a mine located on the Medvednica mountain</b><br/>
        It is located in the middle of the park on the height of 800m.<br/>
        It originates from Petar Zrinski, who, in 1463., gained access to mining inside the mountain of Medvednica<br/>
        The mine today is closed for the public, but the national park Medvednica enables its sightseeing<br/>
        
        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'rudnik',
    };
    </script>
    
    
    <style lang="scss">
    #rudnik{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>