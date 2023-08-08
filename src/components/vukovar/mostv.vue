<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Vuka bridge</p>
    </div>
    
    <div class="card-body p-0">
     <img id="mostv" class="card-img-top" src="@/assets/vukovar/mostv.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Vuka bridge</b><br/>
            A bridge in Vukovar going accross the Vuka river<br/>
            It is one of the symbols of Vukovar, and offers a beautiful view on Vuka and Danube<br/>
            On the bridge there can be found 3D stickers with which visitors can have fun making photos
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'mostv',
    };
    </script>
    
    
    <style lang="scss">
    #mostv{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>