<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">St. Vlaho Church</p>
    </div>
    
    <div class="card-body p-0">
     <img id="vlaho" class="card-img-top" src="@/assets/dubrovnik/vlaho.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"> <b>St. Vlaho baroque church - St. Vlaho protectors church of Dubrovnik</b><br/>
       One of the citys most major sights<br/>
       St. Vlaho is a protector of Dubrovnik, the church was built in 1715 by a venetian architect on the foundations of an old church<br/>
       The church consists of a single square nave with a ground plan in the form of an inscribed Greek cross, an apse flanked by two sacristies and an oblong cupola in the center<br/>
       A flight of stairs leads to the portal, decorated with statues of angels<br/>
       The main altar, in a combination of white and polychrome marble, shows in a high niche a precious, gilt silver Gothic statue of St. Vlaho<br/>
       The saint shows in his left hand a scale model of the Romanesque church which was destroyed by the earthquake in 1667. He is flanked by two kneeling angels.<br/>
       This statue was the only one to survive the fire of 1706. 
       </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'vlaho',
    };
    </script>
    
    
    <style lang="scss">
    #stradun{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>