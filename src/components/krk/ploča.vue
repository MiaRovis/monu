<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Baška tablet</p>
    </div>
    
    <div class="card-body p-0">
     <img id="ploča" class="card-img-top" src="@/assets/krk/ploča.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Baška tablet</b><br/>
            One of the first monuments containing an inscription in the Croatian recension of the Church Slavonic language, dating from 1100century AD<br/>
            The inscription is written in the Glagolitic script<br/>
            It was discovered in 1851 near the village of Baška on the Croatian island of Krk<br/>
            The Baška tablet is made of white limestone; It is 199 cm wide, 99.5 cm high, and 7.5–9 cm thick; It weighs approximately 800 kilograms<br/>
            The tablet was believed to be installed as a partition between the altar and the rest of the church<br/>
            It's content suggests it was inscribed after the death of King Zvonimir in 1089, since abbot Držiha describes Zvonimir's donation as an event that happened further in the past<br/>
            The Church of St. Lucy, described as having been built during the reign of prince Cosmas, indicates an era before the Venetian rule on Krk, starting in 1116<br/>
            This, along with the Romanesque features of the church, dates the tablet to the late 11th or early 12th century<br/>
            It is very significant because the name of Croatia and King Zvonimir are mentioned on the tablet for the first time in Croatian

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'ploča',
    };
    </script>
    
    
    <style lang="scss">
    #ploča{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>