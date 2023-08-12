<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Gregory of Nin</p>
    </div>
    
    <div class="card-body p-0">
     <img id="grgur" class="card-img-top" src="@/assets/split/grgur.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Gregory of Nin</b><br/>
            Gregory was the Bishop of Nin and as such was under the strong protection of King Tomislav of Croatia<br/>
            He was a Croatian Catholic prelate who served as a medieval Bishop of Nin and strongly opposed the pope and official circles of the Catholic Church<br/>
            He introduced the Croatian language in the religious services after the Great Assembly in 926, according to traditional Croatian historiography<BR/>
            Until that time, services were held only in Latin, not being understandable to a majority of the population<br/>
            Not only was this important for Croatian language and culture, but it also made Christianity stronger within the Croatian kingdom<br/>
            The 8.5 metre tall statue of Gregory of Nin by Ivan Meštrović in Split is a busy tourist site in the town, which the toe of the statue shows<br/>
            Rubbing the statue's toe is said to bring good luck; The toe has been worn smooth and shiny as a result<br/>

           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'grgur',
    };
    </script>
    
    
    <style lang="scss">
    #grgur{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>