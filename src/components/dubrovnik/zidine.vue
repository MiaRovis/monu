<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Dubrovnik city walls</p>
    </div>
    
    <div class="card-body p-0">
     <img id="zidine" class="card-img-top" src="@/assets/dubrovnik/zidine.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"> <b>Dubrovnik city walls - a series of defensive stone walls surrounding the city</b><br/>
        The walls run an uninterrupted course of approximately 1,940m in length, encircling most of the old city, and reach a maximum height of about 25 metres<br/>
        In 1979, the old city of Dubrovnik, which includes a substantial portion of the old walls of Dubrovnik, joined the UNESCO list of World Heritage Sites<br/>
        The city walls contain 4 different gates to the city, 2 that lead to the harbour and 2 that lead to the mainland<br/>
        The land walls stretch from Fort Bokar in the west to the detached Revelin Fortress in the east<br/>
        On the landside, the wall is protected with an additional range of slanted supporting walls as defense


       </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'zidine',
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