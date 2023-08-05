<template>
<div class="card">
<div class="card-header text-left">
<p id="ime">Biokovo</p>
</div>

<div class="card-body p-0">
 <img id="biokovo" class="card-img-top" src="@/assets/priroda/biokovo.jpg"/>
</div>

<div class="card-footer text-muted text-left">
    <p id="ime">Mountain Biokovo, found in Splitsko-Dalmatiska county which separates Jadran from Zagora.<br>
    It is 1763m high, the highest point is St.Jure<br/>
    To visit: Biokovo skywalk
    </p>
</div>
</div>

</template>

<script>
export default{
    name: 'biokovo',
};
</script>


<style lang="scss">
#biokovo{
    height:300px;
    width:300px;
}

#ime{
    margin:5px;
    color:black;
    font-size:20px;
}

 </style>