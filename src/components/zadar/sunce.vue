<template>
    <div class="card">
    <div class="card-header text-left">
    <p id="ime">The Greeting to the Sun</p>
    </div>
    
    <div class="card-body p-0">
     <img id="sunce" class="card-img-top" src="@/assets/zadar/sunce.jpg"/>
    </div>
    
    <div class="card-footer text-muted text-left">
        <p id="ime"><b>The Greeting to the Sun</b><br/>
          The Greeting to the Sun is a monument in Zadar, Croatia dedicated to the Sun<br/>
          It consists of three hundred, multi-layered glass plates placed on the same level as the stone-paved waterfront, and a 22-meter diameter circle, with photovoltaic solar modules underneath<br/>
          The monument, designed by Croatian architect Nikola Bašić, symbolizes communication with nature and communicates with light<br/>
          The monument is located at the entrance to the port of the Croatian town of Zadar on the western point of the Zadar peninsula<br/>
          On the chrome ring that surrounds the photovoltaics on the Sun are inscribed the names of all of the saints after which churches on the Zadar peninsula have been named<br/>
          Next to their names and their feast dates are the declination and the altitude of the Sun north or south of the equator, the length of the sunlight in the meridian on that day, and in that place on the waterfront, which makes this Monument kind of a calendar<br/>
          The photovoltaic solar modules absorb light energy, transform it into electricity and release it into the power network. The entire system annually produces about 46,500 kWh; It produces half of the energy needed for lighting the Zadar waterfront<br/>


           

        </p>
    
    
    </div>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'sunce',
    };
    </script>
    
    
    <style lang="scss">
    #sunce{
        height:300px;
        width:400px;
    }
    
    #ime{
        margin:5px;
        color:black;
        font-size:20px;
    }
    
     </style>