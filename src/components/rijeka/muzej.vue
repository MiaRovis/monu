<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Governors palace - maritime and historical museum</p>
    </div>
    
    <div class="card-body p-0">
     <img id="muzej" class="card-img-top" src="@/assets/rijeka/muzej.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Governors palace</b><br/>
        It is a former Governors palace, regent of HUngarian crown of st. Stjepan in Rijeka<br/>
        The governors of Rijeka used to dine in the old governor's palace built in the 18th century, which was located on the site of today's Adria Palace between Riva and Adriatic Square<br/>
        In its interior, on the first floor, there is a spacious atrium and representative salons (Red and Green Salon), a boudoir and a Marble Hall, all with original furniture, made according to the "fin de siecle" taste<br/>
        Until May 3, 1945, this palace witnessed fateful events in the history of Rijeka<br/>
        In 1955, the Maritime and Historical Museum of the Croatian Littoral moved from Sušak to the palace, even though Rijeka does not belong to the Croatian Littoral

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'muzej',
    };
    </script>
    
    
    <style lang="scss">
    #muzej{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>