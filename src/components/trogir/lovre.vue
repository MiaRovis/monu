<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Cathedral of St. Lawrence</p>
    </div>
    
    <div class="card-body p-0">
     <img id="lovre" class="card-img-top" src="@/assets/trogir/lovre.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Cathedral of St. Lawrence</b><br/>
          It is a Roman Catholic triple-naved basilica constructed in Romanesque-Gothic in Trogir, Croatia
          Since its construction lasted several centuries, it illustrates all the styles that succeeded one another in Dalmatia<br/>
          It was built on the foundations of an Early Christian cathedral destroyed in the 12th century during the sack of the town by the Saracens in 1123<br/>
          Most of the work in the construction of the cathedral took place in the 13th century, being largely completed in 1251<br/>
          Trogir cathedral is the most archaic example in the construction of interior arcades in Dalmatia with heavy elongated piers separating the two Gothic-ribbed aisles from the nave, vaulted later also in Gothic style in the 15th century, three semi-circular apses and a vaulted interior above which rises the Campanile<br/>
          A large vestibule was added in the 15th century and the artistically well-executed Gothic rosette on the western facade is from the same period<br/>
          At the far end of the entrance hall there is a Gothic and Romanesque baptistery which was added to the cathedral in about 1467<br/>
          The Gothic sacristy was added to the cathedral in the 15th century.<br/>
          It serves now as the most imposing monument in the city of Trogir<br/>
        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'lovre',
    };
    </script>
    
    
    <style lang="scss">
    #lovre{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>