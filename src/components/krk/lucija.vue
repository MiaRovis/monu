<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Church of St. Lucy</p>
    </div>
    
    <div class="card-body p-0">
     <img id="arena" class="card-img-top" src="@/assets/krk/lucija.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Church of St. Lucy</b><br/>
            The Church of St. Lucy in Jurandvor near Baška, Krk, Croatia is a Romanesque Catholic church from the year 1100 with two major medieval Croatian artifacts: the Baška Tablet,[1] and a checkerboard-pattern carving on the bell tower that is suspected to be one of the first instances of the Croatian coat of arms<br/>
            From different instances it is believed that the church had already existed in the 11th century<br/>
            By the writing on the Baška Tablet, it is clear to conclude that Croatian king Dmitar Zvonimir gave the land where the church stands to opat Držiha, on which he then built the church<br/>
            Today, the church is a small Romanesque building with one nave ending in a semicircular apse<br/>
            On the facade, also Romanesque, is the belfry through which you enter the church<br/>
            The bell tower was built by Andrew of Krk in the 13th century, and his inscription is preserved on the bell tower: MAISTER ANDREAS ME FECIT
        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'lucija',
    };
    </script>
    
    
    <style lang="scss">
    #lucija{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>