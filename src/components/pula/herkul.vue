<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Gate of Hercules</p>
    </div>
    
    <div class="card-body p-0">
     <img id="herkul" class="card-img-top" src="@/assets/pula/herkul.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Gate of Herules - Porta Ercole</b><br/>
        Gate of Herules are the oldest preserved monument of roman architecture in Pula, built in 1st century BC<br/>
        They are the oldest city gates, with an opening of 3,6m and height of over 4m<br/>
        Gate frame is made of stone blocks and in the middle front block of the arch there is a head with curly hair<br/>
        On the left side there is a bag - atribute of a mithical hero Hercules, who was a protector of Pula<br/>
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'herkul',
    };
    </script>
    
    
    <style lang="scss">
    #herkul{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>