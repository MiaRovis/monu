<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Votive statue of the Holy Trinity</p>
    </div>
    
    <div class="card-body p-0">
     <img id="trg" class="card-img-top" src="@/assets/osijek/trg.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Votive statue of the Holy Trinity</b><br/>
           A stone statue representing the Holy Trinity<br/>
           The statue was built in baroque style between 1729 and 1730 in memory of a vow against plague, which was common in the 18th century in Slavonia<br/>
            The statue consists of 5 sculptures of Saints, protectors of plague:  st. Sebastijan, st. Rok, st. Karlo Boromejski, st. Franjo Ksaver and st. Rozalija<br/>
            On the stand there is a high columnn of the Holy Trinity, which shows the Father, the Son and the Holy Spirit in a form of a dove
        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'trg',
    };
    </script>
    
    
    <style lang="scss">
    #trg{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>