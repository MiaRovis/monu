<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The pedestrian bridge</p>
    </div>
    
    <div class="card-body p-0">
     <img id="most" class="card-img-top" src="@/assets/osijek/most.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Pedestrian bridge - most notable symbol of Osijek</b><br/>
           It is a hanging bridge accros Drava in Osijek<br/>
           It connects the city center with recreational center found accross the river<br/>
           It is the most beautiful symbol of the city and its looks are one of a kind<br/>
           From the day it was built till the war it was called the Youth bridge, and many people still call it by that name today<br/>
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'most',
    };
    </script>
    
    
    <style lang="scss">
    #most{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>