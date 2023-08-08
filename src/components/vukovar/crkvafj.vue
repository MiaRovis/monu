<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Church of Saints Philip and James</p>
    </div>
    
    <div class="card-body p-0">
     <img id="crkvafj" class="card-img-top" src="@/assets/vukovar/crkvafj.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Church of Saints Philip and James - Roman Catholic church</b><br/>
            The church was built from 1723 till 1732, when it was blessed by Marko Dragojević<br/>
            It was built by Franciscan monks who moved to Vukovar from the village of Srijemske Laze<br/>
            It is a part of the monastery in Vukovar<br/>
            It's 58 meters long, making in the thirds longest church in Croatia<br/>
            After severe suffering in the Serbian aggression and occupation, it was thoroughly restored, although some wounds were left as a reminder of wartime suffering<br/>
            

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'crkvafj',
    };
    </script>
    
    
    <style lang="scss">
    #crkvafj{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>