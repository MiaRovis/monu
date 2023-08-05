<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Učka</p>
    </div>
    
    <div class="card-body p-0">
     <img id="ucka" class="card-img-top" src="@/assets/priroda/ucka.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">Učka mountain range, found in Istria county, biggest mountain in Istria <br/>
        Forms a single morphological unit with Ćićarija mountain<br/>
        Highest peak Vojak - 1396m high, consists of a beautiful lookout on Istria, Rijeka and northern Adriatic island, and bay of Trieste, considered nature reserve and memorial area<br/>
        To visit: Vojak peak
    </p>
    </div>

    </div>
    </template>
    
    <script>
    export default{
        name: 'ucka',
    };
    </script>
    
    
    <style lang="scss">
    #ucka{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    .card{
        margin:10px;
    }
    
     </style>