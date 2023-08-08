<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">Eltz Manor</p>
    </div>
    
    <div class="card-body p-0">
     <img id="eltz" class="card-img-top" src="@/assets/vukovar/eltz.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Eltz Manor - a Baroque palace</b><br/>
            The 18th-century manor is the location of the Vukovar City Museum<br/>
            he palace was originally built between 1749 and 1751 by the Archchancellor's descendants of the German Catholic noble House of Eltz and was gradually extended over time<br/>
            The palace suffered substantial damages and destruction in 1991 during the war, however after years of restoration it was completely restored<br/>
            The manor, as it previously appeared, was depicted on the reverse of the Croatian 20 kuna banknote, issued in 1993 and 2001<br/>
            Today, it is a beatuful estate where visitors can dine and drink fine wine

           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'eltz',
    };
    </script>
    
    
    <style lang="scss">
    #eltz{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>