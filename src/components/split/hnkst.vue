<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Croatian National Theatre in Split</p>
    </div>
    
    <div class="card-body p-0">
     <img id="hnkst" class="card-img-top" src="@/assets/split/hnkst.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Croatian National Theatre in Split</b><br/>
           It is a theatre located in Split, Croatia<br/>
           Originally opened in 1893, the theatre is owned and operated by the City of Split and is one of the oldest surviving theatres in Dalmatia<br/>
           The theatre building was originally constructed as the Split Municipal Theatre in 1893 during the tenure of then mayor Gajo Bulat<br/>
           The theatre, which had a capacity of 1,000 was the biggest theatre in Southeast Europe at the time of its completion<br/>
           The building was initially used to stage performances by traveling troupes, as there was no full-time drama ensemble in the city of Split by the very end of the 19th century<br/>
           The first professional theatre troupe appeared in 1920<br/>
           HNK Split hosts around 300 performances every year, attended by a total audience of around 120,000<br/>
           Some 20 to 40 opera, ballet and dramatic productions are staged per year in addition to many symphony concerts performed by the in-house orchestra<br/>
           The theatre is billed as the premier theatre house in Dalmatia and one of the biggest and oldest theatre houses in the Mediterranean


        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'hnkst',
    };
    </script>
    
    
    <style lang="scss">
    #hnkst{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>