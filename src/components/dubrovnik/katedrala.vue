<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Assumption Cathedral</p>
    </div>
    
    <div class="card-body p-0">
     <img id="katedrala" class="card-img-top" src="@/assets/dubrovnik/katedrala.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"> <b>The Assumption Cathedral - Roman Catholic cathedral, the seat of the Diocese of Dubrovnik</b><br/>
        It was built in the same spot after the fall of byzantine and roman cathedral, after the big earthquake<br/>
        According to the legend, roman cathedral from 12th century was built with money from an english king Rikard 1. Lion Heart, who survived a shipwreck not far from Lokrum<br/>
        In order to thank the people he gave them money which they used to build the cathedral<br/>
        Its the first roman basillica in the east mediterranean which effected church architecture of the whole region<br/>
        Inside the cathedral treasury there are many gold and silver reliquies, crosses and paintings from croatian and italian painters<br/>
        Also, in the treasury, there is a reliq of the head of St. Vlaho from 11.-12th century
        
        </p>
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'katedrala',
    };
    </script>
    
    
    <style lang="scss">
    #katedrala{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>