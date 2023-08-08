<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The memorial home for Croatian war veterans</p>
    </div>
    
    <div class="card-body p-0">
     <img id="dom" class="card-img-top" src="@/assets/vukovar/dom.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The memorial home for Croatian war veterans </b><br/>
            The memorial home for Croatian veterans was built in Borovo naselje near the local community where the command of that part of the city was located in 1991<br/>
            The building is made in the shape of a tightly clenched fist, which symbolizes the strength with which Vukovar defended itself against aggression<br/>
            In the center of the House is an abyss with the dome of a destroyed tank of the former JNA, and around it are written the names of the fallen members of the 204th Vukovar Brigade<br/>
            On 12 video screens in the walls, you can see war photos and videos of early events and hear authentic war reports<br/>
        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'dom',
    };
    </script>
    
    
    <style lang="scss">
    #dom{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>