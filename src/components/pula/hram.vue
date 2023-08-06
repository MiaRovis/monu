<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Augustus Temple</p>
    </div>
    
    <div class="card-body p-0">
     <img id="hram" class="card-img-top" src="@/assets/pula/hram.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Temple of Augustus - Roman temple in Pula</b><br/>
        It is dedicated to the first Roman emperor Augustus, and built during his lifetime<br/>
        The temple is considered one of the two best complete Roman monuments outside Italy<br/>
        It was struck by a bomb during an Allied air raid in 1944, almost totally destroying it, but was reconstructed in 1947<br/>
        Today, it's used as a lapidarium to display items of Roman sculpture
        
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'hram',
    };
    </script>
    
    
    <style lang="scss">
    #hram{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>