<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime"></p>
    </div>
    
    <div class="card-body p-0">
     <img id="marko" class="card-img-top" src="@/assets/zagreb/marko.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b></b><br/>
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'marko',
    };
    </script>
    
    
    <style lang="scss">
    #marko{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>