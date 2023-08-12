<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Kamerlengo fortress</p>
    </div>
    
    <div class="card-body p-0">
     <img id="kastelk" class="card-img-top" src="@/assets/trogir/kastelk.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Kamerlengo fortress</b><br/>
            Kaštel Kamerlengo was built in the southwest of the city, to defend the sea channel and the approach to the port<br/>
            The fort has a trapezoidal floor plan with a monumental polygonal tower facing the sea at the place of the Chain Tower and smaller corner towers<br/>
            Around the fortress there was a rampart with a retaining wall, and a wide defensive moat towards the city from the north and east<br/>
            The main gate of the castle with a lunette and drawbridge is on the north side of the castle<br/>
            In the middle of the curtain on the south, west and north sides is a berteska with a hanging arch on consoles<br/>
            In the inner courtyard there were residential buildings for the castellan and crew and the chapel of St. Brand<br/>
            It is located on the southwestern edge of the city of Trogir, in the corner of the walls<br/>
            The oldest part is the polygonal tower from the end of the 14th century<br/>
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'kastelk',
    };
    </script>
    
    
    <style lang="scss">
    #kastelk{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>