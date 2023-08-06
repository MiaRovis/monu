<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime"></p>
    </div>
    
    <div class="card-body p-0">
     <img id="hnkst" class="card-img-top" src="@/assets/split/hnkst.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b></b><br/>
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'hnkst',
    };
    </script>
    
    
    <style lang="scss">
    #hnkst{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>