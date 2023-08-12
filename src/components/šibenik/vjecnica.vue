<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Šibenik's town hall</p>
    </div>
    
    <div class="card-body p-0">
     <img id="vjecnica" class="card-img-top" src="@/assets/šibenik/vjecnica.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Šibenik's town hall</b><br/>
            It is a city hall located on the north side of the old main town square, pposite the north facade of the famous cathedral of St. Jacob<br/>
            The town hall was certainly the most prestigious civil building of medieval Šibenik, and even today it is among the most famous cultural monuments of Krešimir's town<br/>
            Many consider it one of the most beautiful Croatian town halls in general<br/>
            It was built in the first half of the 16th century, more precisely between 1533 and 1546, in the style of the High Renaissance, and it is characterized by extreme harmony <br/>
            The building consists of a ground floor and a first floor<br/>
            The ground floor begins with a portico with nine semicircular arches, typical of the Renaissance style, which rest on ten columns above which extends a cornice on which there are bases with reliefs of large lion heads<br/>
            It used to house the offices of the city administration, while city council meetings took place upstairs in the representative hall<br/>
            The front of the floor is divided by columns, and the lower part is decorated with a balustrade and a richly decorated balcony<br/>
            On the left side of the Gad town hall there is a small belfry "on a horsetail" whose bell called the town nobles to deliberations
           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'vjecnica',
    };
    </script>
    
    
    <style lang="scss">
    #vjecnica{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>