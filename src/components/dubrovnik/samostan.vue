<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Francisary friary</p>
    </div>
    
    <div class="card-body p-0">
     <img id="samostan" class="card-img-top" src="@/assets/dubrovnik/samostan.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"> <b>Francisary friary and church</b><br/>
        A large complex belonging to the order of the Friars Minor constiting of a friary, a church, a library, and a pharmacy<br/>
        The friary was built in 1360 in late Romanesque style by the master Mihoje Brajkov of Bar<br/>
        It contains two cloisters, the upper cloister was built in Renaissance style, with arches and semicircular vaults<br/>
        and the lower cloister which was built in Romanesque-Gothic style with arches, 120 columns and 12 massive pilasters and a promenade<br/>
        The library contains over 20,000 books, among them 1200 valuable old manuscripts, 137 incunables, seven books with old church corals and the inventory of the old Friars Minor Pharmacy from 1317<br/>
        The museum library also contains an exhibition of liturgical artifacts, including a 15th-century silver-gilt cross and silver thurible, and an 18th-century crucifix from Jerusalem<br/>
        The pharmacy dates from 1317 and is the oldest still-functioning pharmacy in Europe and the third oldest in the world


        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'samostan',
    };
    </script>
    
    
    <style lang="scss">
    #samostan{
        height:300px;
        width:450px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>