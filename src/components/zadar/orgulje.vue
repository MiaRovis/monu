<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Sea organ</p>
    </div>
    
    <div class="card-body p-0">
     <img id="orgulje" class="card-img-top" src="@/assets/zadar/orgulje.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Sea organ</b>- sound art sea object<br/>
            They are a unique architectural achievement, an interesting and original combination of architecture and music<br/>
            Unlike ordinary organs powered by bellows or air pumps, the sound of these organs is created under the influence of the energy of the sea, waves and tides that is<br/>
            The organs create different sound according to the movement of the sea<br/>
            They are a beautiful part of Zadar and unlike anything in the world
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'orgulje',
    };
    </script>
    
    
    <style lang="scss">
    #orgulje{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>