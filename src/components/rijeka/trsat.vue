<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Trsat</p>
    </div>
    
    <div class="card-body p-0">
     <img id="trsat" class="card-img-top" src="@/assets/rijeka/trsat.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Trsat - northern part of Rijeka</b><br/>
           It consists of a historic castle or fortress in a strategic location and several historic churches, in one of which the Croatian noble Prince Vuk Krsto Frankopan is buried<br/>
           Trsat is a steep hill, 138 m high, rising over the gorge of the Rječina river, about a kilometre away from the sea<br/>
            Today, it is today a major Christian pilgrimage centre and home to a statue of Pope John Paul II who came to Trsat as a Pilgrim in 2003<br/>
            the University of Rijeka's newly constructed campus lies in the western part of Trsat<br/>
            Trsat Castle stands on the site of an old Roman fortress and was built in the first half of the 13th century by the Frankopan Princes of Krk<br/>


        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'trsat',
    };
    </script>
    
    
    <style lang="scss">
    #trsat{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>