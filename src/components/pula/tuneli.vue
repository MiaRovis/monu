<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Zerostrasse tunnels</p>
    </div>
    
    <div class="card-body p-0">
     <img id="tuneli" class="card-img-top" src="@/assets/pula/tuneli.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Zerostrasse - Pula underground tunnels</b><br/>
        The underground tunnles create a 10km long underground net which connects Pula fortifications<br/>
        The most famous tunnels are under Kaštel<br/>
        In the middle there is a hall which is placed directly under Venetian fortress<br/>
        There are 4 different entrances that lead to the hall - Dvojna vrata, Nemeš gallery, Tech school and on the hill by the friery<br/>
        Tunnels are in relatively good condition with an access to power and water<br/>
        
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'tuneli',
    };
    </script>
    
    
    <style lang="scss">
    #tuneli{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>