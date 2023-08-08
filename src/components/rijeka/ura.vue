<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Gradska Ura</p>
    </div>
    
    <div class="card-body p-0">
     <img id="ura" class="card-img-top" src="@/assets/rijeka/ura.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The city clock - city tower with a clock on top</b><br/>
           It is a significant building of Rijeka in the middle of Korzo<br/>
           One of the main symbols of Rijeka, a symbol of culture<br/>
            Under the clock there is a double headed eagle with both heads turned to the same side, which stands on a vessel from which there is water going into the sea<br/>
            On the vessel there is a word Ideficienter, which means inexhaustible
        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'ura',
    };
    </script>
    
    
    <style lang="scss">
    #ura{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>