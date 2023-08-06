<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Oltar Domovine</p>
    </div>
    
    <div class="card-body p-0">
     <img id="oltar" class="card-img-top" src="@/assets/medvedgrad/oltar.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Oltar Domovine - monument for all lives lost in the war</b><br/>
        The monument is located in Medvedgrad, and was first opened on statehood day on May 30th 1994. by president Franjo Tuđman<br/>
        It is consisted of stone blocks of different kinds of stone, different in size and height, and six blue glass panels which together create the Croatian emblem<br/>
        On the blocks are carved Croatian motives, Big cross and lyrics to Croatian national anthem<br/>
        The blocks are made of stone from each of the Croatian counties.<br/>
        In the middle of the monument there are vječna vrata (eternal gates)
           

    </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'oltar',
    };
    </script>
    
    
    <style lang="scss">
    #oltar{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>