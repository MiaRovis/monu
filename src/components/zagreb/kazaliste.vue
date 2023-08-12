<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Croatian National Theatre in Zagreb</p>
    </div>
    
    <div class="card-body p-0">
     <img id="kazaliste" class="card-img-top" src="@/assets/zagreb/kazaliste.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Croatian National Theatre in Zagreb</b>- a theatre, opera and ballet house<br/>
            The theatre evolved out of the first city theatre opened in 1834 housed in the present-day Old City Hall<br/>
            The theatre was first established as the Croatian National Theatre in 1860, and in 1861 it gained government support putting it on par with many other European national theatres<br/>
            In 1870 an opera company was added to the theatre and in 1895 it moved to the new purpose-built building on Republic of Croatia Square in Zagreb's Lower Town, where it is based today<br/>
            The building itself was the project of famed Viennese architects Ferdinand Fellner and Herman Helmer, whose firm had built several theatres in Vienna<br/>
            At the entrance of the theatre is located the wall fountain The Source of Life<br/>


        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'kazaliste',
    };
    </script>
    
    
    <style lang="scss">
    #kazaliste{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>