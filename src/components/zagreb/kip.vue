<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Ban Jelačić Square</p>
    </div>
    
    <div class="card-body p-0">
     <img id="kip" class="card-img-top" src="@/assets/zagreb/kip.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Ban Jelačić Square</b>- he central square of the city of Zagreb<br/>
            It is located below Zagreb's old city cores Gradec and Kaptol and directly south of the Dolac Market on the intersection of Ilica from the west, Radićeva Street from the northwest, the small streets Splavnica and Harmica from the north, Bakačeva Street from the northeast, Jurišićeva Street from the east, Praška Street from the southeast and Gajeva Street from the southwest<br/>
            It is the center of the Zagreb Downtown pedestrian zone<br/>
            The square's history begins in 1641, when a new marketplace was created on a plain below Gradec and Kaptol, near Manduševec spring. Over time, buildings and access roads were constructed around the marketplace; The location, initially called Manduševec, was later named Harmica<br/>
            The oldest standing building, dating from the 18th century, is situated at 1 Ban Jelačić Square<br/>
            After World War II, car traffic through the square intensified. In 1975, the square became a car-free zone<br/>
            
        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'kip',
    };
    </script>
    
    
    <style lang="scss">
    #kip{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>