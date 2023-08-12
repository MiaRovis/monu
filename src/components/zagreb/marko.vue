<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">St. Mark's Square</p>
    </div>
    
    <div class="card-body p-0">
     <img id="marko" class="card-img-top" src="@/assets/zagreb/marko.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>St. Mark's Square</b><br/>
           It is a square located in the old part of Zagreb, Croatia, called Gradec or Gornji grad<br/>
           In the center of square is located St. Mark's Church<br/>
           The square also sports important governmental buildings: Banski dvori (the seat of the Government of Croatia), Croatian Parliament and Constitutional Court of Croatia<br/>
           On the corner of St. Mark's Square and the Street of Ćiril and Metod is the Old City Hall, where the Zagreb City Council held its sessions<br/>
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'marko',
    };
    </script>
    
    
    <style lang="scss">
    #marko{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>