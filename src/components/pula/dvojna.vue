<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Dvojna vrata - Porta Gemina</p>
    </div>
    
    <div class="card-body p-0">
     <img id="dvojna" class="card-img-top" src="@/assets/pula/dvojna.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Dvojna vrata - Roman city gate</b><br/>
        Porta Gemina is a double arched gate, it was one of the ten city gates of Pula, standing at the north side of the capitol<br/>
        In the Middle Ages, the gates were buried underground, they were only recently dug out and brought back to light<br/>
        Porta Gemina was named after its two semi-circular openings leading into the town, built in the late 2nd century or early 3rd century AD on the remains of an earlier town gate
        The two openings are decorated with three pilasters with composite capitals<br/>
        Today, the gates – in front of which were discovered the remains of a partially reconstructed octagonal mausoleum dating to the 2nd or 3rd century AD – lead to the Archaeological Museum of Pula, to the Castle, and a small Roman theatre
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'dvojna',
    };
    </script>
    
    
    <style lang="scss">
    #dvojna{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>