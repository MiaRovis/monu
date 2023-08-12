<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The four wells</p>
    </div>
    
    <div class="card-body p-0">
     <img id="bunar" class="card-img-top" src="@/assets/šibenik/bunar.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The four wells</b><br/>
            Only a few tens of meters from the Cathedral of St. Jakov, there is a plateau under which there used to be a public city cistern, i.e. a water reservoir<br/>
            The people of Šibenik had it built due to frequent dry periods, but also due to frequent military sieges<br/>
            The construction contract was signed in 1446, and the construction was supervised by the famous Juraj Dalmatinac, best known for the neighboring Cathedral<br/>
            The cistern could hold 28,000 barrels of water, and a special tax was introduced to build it<br/>
            On the plateau itself, i.e. its outer part, there are four wells, from where water could be drawn<br/>
            The entire complex has been thoroughly renovated in recent years, so the '4 wells' are today one of the most beautiful areas in Šibenik<br/>

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'bunar',
    };
    </script>
    
    
    <style lang="scss">
    #bunar{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>