<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime"></p>
    </div>
    
    <div class="card-body p-0">
     <img id="jakov" class="card-img-top" src="@/assets/krk/jakov.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b></b><br/>
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'jakov',
    };
    </script>
    
    
    <style lang="scss">
    #jakov{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>