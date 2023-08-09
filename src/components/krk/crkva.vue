<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Church of St. Dunat and St. Krševan</p>
    </div>
    
    <div class="card-body p-0">
     <img id="crkva" class="card-img-top" src="@/assets/krk/crkva.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Church of St. Dunat and St. Krševan</b><br/>
        <b>St. Dunat</b><br/>
        Church of St. Dunata was built at the intersection of roads leading to Punt, Krk, Kornić and Vrbnik
        Although the time of its construction cannot be determined with certainty, along with the churches in Nin and Zadar, it is one of the most significant monuments of ancient Croatian architecture<br/>
        <b>St. Krševan</b><br/>
        Church of St. Krševana was built over the bay of Čavlena, on Cape Glavotok, 2 km from the village of Milohnići<br/>
        It is located on the ground that descends from south to north, in a series of terraces, towards the sea<br/>
        Archaeologists attribute the construction of the church to early Romanesque<br/>
        The construction itself is linked to the transfer of the diocese of Krk under the patronage of the archdiocese of Zadar in the middle of the 12th century<br/>
        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'put',
    };
    </script>
    
    
    <style lang="scss">
    #crkva{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>