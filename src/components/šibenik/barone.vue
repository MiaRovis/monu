<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Barone Fortress</p>
    </div>
    
    <div class="card-body p-0">
     <img id="barone" class="card-img-top" src="@/assets/šibenik/barone.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Barone Fortress</b><br/>
            It is an early modern fortress constructed in 1646 on Vidakuša hill above the city<br/>
            Together with the remaining three city fortresses, it is a part of the Šibenik fortification system<br/>
            It played a significant role in city's defense from the Ottomans during the Cretan War<br/>
            At the start of the 20th century, along with the surrounding neighborhood, it was renamed Šubićevac, after the medieval patrician family Šubić<br/>
            The construction of both Barone Fortress and the adjacent St. John's Fortress began on 1 August 1646, and both fortresses were successfully built in only 58 days<br/>
            Shaped as an irregular star, the fortress resisted enemy cannons thanks to the bastions reinforced with mounds<br/>
            The northern part of the fortress has two demi-bastions connected by a curtain wall. That was the position of the defense artillery<br/>
            The southern part was used for barracks and magazines<br/>
           The fortress today offers its visitors a digital tour through Šibenik's past, via an augmented reality platform and other multimedia features<br/>



           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'barone',
    };
    </script>
    
    
    <style lang="scss">
    #barone{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>