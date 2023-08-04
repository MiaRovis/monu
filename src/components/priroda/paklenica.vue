<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Paklenica</p>
    </div>
    
    <div class="card-body p-0">
     <img id="paklenica" class="card-img-top" src="@/assets/paklenica.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime">National park Paklenica, found on Velebit mountain, 2nd annouced national park in Croatia<br/>
        Signed into UNESCOs world heritage list in Europe<br/>
        It is made of 2031ha of forest<br/>
        To visit: National park Paklenica 
        </p>
    </div>

    </div>
    </template>
    
    <script>
    export default{
        name: 'paklenica',
    };
    </script>
    
    
    <style lang="scss">
    #paklenica{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    .card{
        margin:10px;
    }
    
     </style>