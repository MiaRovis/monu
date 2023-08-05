<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Arch of the Sergii - Golden door</p>
    </div>
    
    <div class="card-body p-0">
     <img id="vrata" class="card-img-top" src="@/assets/pula/vrata.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Arch of the Sergii - Ancient Roman triumphal arch</b><br/>
            The arch commemorates three members of the Sergii family, the officials in the colony who retained their power for centuries<br/>
            The honorary triumphal arch, originally a city gate, was erected as a symbol of the victory at Actium<br/>
            In its original form, statues of the two elders flanked Lepidus on both sides on the top of the arch. On either side of the inscription, a frieze depicts cupids, garlands and bucrania<br/>
            It was built from 29BC to 27BC<br/>
            <b>Location</b>: Prvomajska ulica, Pula
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'vrata',
    };
    </script>
    
    
    <style lang="scss">
    #vrata{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>