<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Diocletian's Palace</p>
    </div>
    
    <div class="card-body p-0">
     <img id="diokl" class="card-img-top" src="@/assets/split/diokl.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Diocletian's Palace</b><br/>
           It is an ancient palace built for the Roman emperor Diocletian at the turn of the fourth century AD, which today forms about half the old town of Split<br/>
           While it is referred to as a "palace" because of its intended use as the retirement residence of Diocletian, the term can be misleading as the structure is massive and more resembles a large fortress: about half of it was for Diocletian's personal use, and the rest housed the military garrison<br/>
           The complex was built on a peninsula six kilometres southwest from Salona, the former capital of Dalmatia, one of the largest cities of the late empire with 60,000 people and the birthplace of Diocletian<br/>
           The terrain around Salona slopes gently seaward and is typical karst, consisting of low limestone ridges running east to west with marl in the clefts between them<br/>
           Today the remains of the palace are part of the historic core of Split, which in 1979 was listed by UNESCO as a World Heritage Site

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'diokl',
    };
    </script>
    
    
    <style lang="scss">
    #diokl{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>