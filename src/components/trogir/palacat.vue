<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Great Cipiko Palace</p>
    </div>
    
    <div class="card-body p-0">
     <img id="palacat" class="card-img-top" src="@/assets/trogir/palacat.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Great Cipiko Palace</b><br/>
            The palace, located in the historical center of Trogir, is a complex consisting of Romanesque buildings, most likely built around 1457<br/>
            The palace was rebuilt several more times, and today it has the appearance of a two-story building with a high attic, built of properly hewn stone blocks decorated with stone plastic by excellent craftsmen<br/>
            After 1474 a Renaissance courtyard with galleries was built by Nikola Florentinec, and a late Renaissance reconstruction around 1600<br/>
            The main entrance facade on the east has a Renaissance portal by Ivan Duknović<br/>
            The portal on the southern facade is the work of Nikola Florentinac<br/>
            Under the code Z-4379, it is registered under the type "immovable cultural property - individual", the legal status of protected cultural property, classified as "public buildings"

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'palacat',
    };
    </script>
    
    
    <style lang="scss">
    #palacat{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>