<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Tvrđa</p>
    </div>
    
    <div class="card-body p-0">
     <img id="tvrda" class="card-img-top" src="@/assets/osijek/tvrda.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Tvrđa - old town</b><br/>
            It is the best-preserved and largest ensemble of Baroque buildings in Croatia and consists of a Habsburg star fort built on the right bank of the River Drava<br/>
            Tvrđa has been described by the World Monuments Fund as "a unique example of an eighteenth-century baroque military, administrative, and commercial urban center"<br/>
            The star fort was constructed in the immediate vicinity of medieval Osijek after the defeat of the Ottoman forces in 1687, due to Osijek's strategic importance<br/>
            Constructed starting in 1712 to plans by Mathias von Kaiserfeld and then Maximilian Gosseau de Henef, all five planned bastions and two gates were complete by 1715<br/>
            By 1735, the inner town was finished and three northern bastions had been added<br/>
            When complete, it was the largest and most advanced Habsburg fortress on the border with the Ottoman Empire, consisting of eight bastions and featuring armories, depots, a garrison headquarters, military court, construction office, a garrison physician, guardhouse, officers' apartments, a military hospital and seven barracks<br/>

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'tvrda',
    };
    </script>
    
    
    <style lang="scss">
    #tvrda{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>