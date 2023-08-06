<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Pula Arena</p>
    </div>
    
    <div class="card-body p-0">
     <img id="arena" class="card-img-top" src="@/assets/pula/arena.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Pula Arena - a Roman amphitheatre located in Pula, Croatia</b><br/>
            It is the only remaining Roman amphitheatre to have four side towers entirely preserved<br/>
            Arena is the country's best-preserved ancient monument and is among the world's six largest surviving Roman arenas<br/>
            Arena was built between 27 BC and 68 AD as the city of Pula became a regional centre of Roman rule, called Pietas Julia<br/>
            The exterior wall is constructed in limestone. The part facing the sea consists of three stories, while the other part has only two stories since the amphitheatre was built on a slope<br/>
            The maximum height of the exterior wall is 29.40 m, The first two floors have each 72 arches, while the top floor consists of 64 rectangular openings<br/>
            The Arena had a total of 15 gates. A series of underground passageways were built underneath the arena along the main axis from which animals<br/>

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'arena',
    };
    </script>
    
    
    <style lang="scss">
    #arena{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>