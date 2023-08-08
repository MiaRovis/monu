<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Petar Kružić staircase</p>
    </div>
    
    <div class="card-body p-0">
     <img id="kruzic" class="card-img-top" src="@/assets/rijeka/kruzic.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Trsat Stairway - Petar Kružić staircase</b><br/>
            The Trsat stairway begins on the banks of the Rječina, beside a bank building, and leads up to the plateau at 138 m above sea level, to Trsat<br/>
            There are 561 steps in all, and they were built for pilgrims on their way to the votive church<br/>
            Work was started on them in 1531 by Petar Kružić, hero of battles against the Turks, who built the lower part of the stairway, later expanded to 538 steps<br/>
            The Baroque entrance hall in the form of a triumphal arch was built in the first half of the 18th century, and the votive chapels on the level ground near the church by the steps, between the 15th and 18th centuries, one chapel each century

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'kruzic',
    };
    </script>
    
    
    <style lang="scss">
    #kruzic{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>