<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Stone Gate</p>
    </div>
    
    <div class="card-body p-0">
     <img id="kamena" class="card-img-top" src="@/assets/zagreb/kamena.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Stone Gate - one of the best preserved monuments of old city Zagreb</b><br/>
            It is a building shaped like a rectangular tower with a vehicular passage<br/>
            They are part of the defense system of Zagreb's Gradec and are the only gates that still exist today<br/>
            They were built in the 13th century, and got their present form in 1760<br/>
            In the passage of the gate there is a chapel with a picture of the Mother of God of the Stone Gate, the patroness of the city, according to the picture that survived the great fire in 1731 intact<br/>
            Next to the baroque fence of the altar from the 18th century, a typical medieval shop, Pod boltom, has been preserved
        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'kamena',
    };
    </script>
    
    
    <style lang="scss">
    #kamena{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>