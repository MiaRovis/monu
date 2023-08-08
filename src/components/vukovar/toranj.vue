<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Vukovar water tower</p>
    </div>
    
    <div class="card-body p-0">
     <img id="toranj" class="card-img-top" src="@/assets/vukovar/toranj.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Vukovar water tower</b><br/>
        It is a water tToday, it has been converted into a museum with a restaurant. Traces of the war are still evidentower in the Croatian city of Vukovar<br/>
        It is one of the most famous symbols of Vukovar and the suffering of the city in the Battle of Vukovar and the war of Independence when the water tower and the city itself were largely destroyed by serbian forces<br/>
        The water tower was designed by the company Plan and built by Hidrotehna Zagreb, in the late 1960s. It was built in a city park, popularly known as Najpar-bašća, in the district of Mitnica<br/>
        Until the war, the top of the tower was home to a restaurant with a view over Vukovar, Danube and surrounding vineyards<br/>
        During the Battle of Vukovar, the water tower was one of the most frequent targets of artillery. It was hit more than 600 times during the siege<br/>
        Today, it has been converted into a museum with a restaurant. Traces of the war are still evident<br/>
        The water tower is a symbol of strenght, victory and pain endured in a war which croatians did not want

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'toranj',
    };
    </script>
    
    
    <style lang="scss">
    #toranj{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>