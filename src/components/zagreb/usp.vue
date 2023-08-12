<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Zagreb Funicular</p>
    </div>
    
    <div class="card-body p-0">
     <img id="usp" class="card-img-top" src="@/assets/zagreb/usp.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Zagreb Funicular</b><br/>
         The funicular in Zagreb is situated in Tomić Street, connecting Ilica (Donji Grad) with Strossmayer promenade to the north (Gornji Grad)<br/>
         Its 66-metre track makes it one of the shortest public-transport funiculars in the world<br/>
         The funicular was built and put into operation in 1890 and propelled by a steam engine<br/>
         It holds a great significance to people of Zagreb because it helps with transportation from one part of the city to the other
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'usp',
    };
    </script>
    
    
    <style lang="scss">
    #usp{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>