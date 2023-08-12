<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">City walls and water gate</p>
    </div>
    
    <div class="card-body p-0">
     <img id="zid" class="card-img-top" src="@/assets/osijek/zid.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>City walls and the water gate - entrance to the city's old center Tvrđa</b><br/>
           The name "Water gate" comes from the fact that they lead to the river Drava<br/>
           They are found inside the walls of Tvrđa and are the only preserved of the four existing gates in the defensive walls of Osijek<br/>
           The city was turned into a fortress at the beginning of the 18th century. From the impressive system of city fortifications, two bastions and a fragment of the wall with the north gate, i.e. the water gate, have survived to this day<br/>
           The construction of the fortification system was completed in 1735. The largest, most technically and architecturally advanced Habsburg fortress on the border with the Ottoman Empire was built<br/>
           It consisted of eight bastions equipped with armories, ammunition and food depots, a military court, a design office, a garrison doctor's office, officer's apartments, a hospital and seven barracks buildings<br/>
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'zid',
    };
    </script>
    
    
    <style lang="scss">
    #zid{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>