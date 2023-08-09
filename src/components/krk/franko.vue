<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Frankopan Castle</p>
    </div>
    
    <div class="card-body p-0">
     <img id="arena" class="card-img-top" src="@/assets/krk/franko.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Frankopan Castle</b><br/>
            A castle located on the southwest coast of the island Krk, in the ancient town of Krk, which is one of the oldest towns in the Adriatic, in Croatia<br/>
            Frankopan Castle on Kamplin was raised by Croatian noble family of Frankopan through several centuries and several generations<br/>
            The oldest part of fortification is the square tower with the diocese, in which Frankopans courtroom was located<br/>
            The round tower on the northern corner of the castle with a transversely extended lower part, was built after the square, probably in the 13th century. It was restored around 1480, and again around 1600<br/>
            On the tower there is bricked inscription Aureae Venetorum libertati with lions of St. Mark, which dates from 1500. This cylindrical tower has two floors and attic<br/>
            Within the complex there was space for soldiers. It is not known precisely when, but the entire complex was completed before 1348

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'franko',
    };
    </script>
    
    
    <style lang="scss">
    #franko{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>