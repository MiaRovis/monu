<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Bašćanska glagolitic trail</p>
    </div>
    
    <div class="card-body p-0">
     <img id="crkva" class="card-img-top" src="@/assets/krk/put.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Bašćanska glagolitic trail</b><br/>
            The Bašćanska glagolitic trail is one of the most interesting projects of the local Sinjali society from Bašća, which has been active in the field of culture, ecology and tradition since 2006<br/>
            The idea on which the project was based was to arrange sculptures along the Baška basin, each of which will represent one letter of the Glagolitic script and be placed in a place of special interest for the promotion of Baška and its surroundings<br/>
            Each letter is sponsored by a specific city, municipality or company whose name begins with that letter<br/>
            interesting that the letter Z 'belonged' to Zadar, and Zagreb thus 'got' the letter A, as the initial letter of the old German name for Zagreb - Agram<br/>
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'crkva',
    };
    </script>
    
    
    <style lang="scss">
    #crkva{
        height:300px;
        width:350px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>