<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Church of St Peter and St Paul</p>
    </div>
    
    <div class="card-body p-0">
     <img id="konkat" class="card-img-top" src="@/assets/osijek/konkat.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>Concathedral of the Roman Catholic Archdiocese of Đakovo-Osijek </b><br/>
            It is a neo-Gothic sacral structure located in Osijek, Croatia
            The multi-tiered 90-metre spire is one of the city's landmarks<br/>
            It was built in 1898 on the initiative of the Bishop of Đakovo Josip Juraj Strossmayer<br/>
            The church is entered via a small door to the right of the main portal, overlooked by a trio of gargoyles<br/>
            The interior is a treasure trove of neo-Gothic ornamentation, with a succession of pinnacled altars overlooked by exuberant stained glass windows<br/>
            The interior was finished off in 1938–1942 when leading Croatian painter Mirko Rački covered the walls and ceilings with brightly coloured frescoes illustrating famous episodes from the Old and New Testaments

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'konkat',
    };
    </script>
    
    
    <style lang="scss">
    #konkat{
        height:300px;
        width:300px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>