<template>
<div class="container text-center">
    
    <div class="row">
    <div class="col">
      <biokovo/> 
    </div>
    <div class="col order-5">
        <brijuni/>
    </div>
    <div class="col order-1">
        <mljet/>
    </div>
    </div>

    <div class="row">
    <div class="col">
        <kopacki/>
    </div>
    <div class="col order-5">
        <krka/>
    </div>
    <div class="col order-1">
        <paklenica/>
    </div>
    </div>

    <div class="row">
    <div class="col">
        <ucka/>
    </div>
    <div class="col order-5">
        <risnjak/>
    </div>
    <div class="col order-1">
        <vransko/>
    </div>
    </div>

    <div class="row">
    <div class="col">
        <papuk/>
    </div>
    <div class="col order-5">
        <plitvice/>
    </div>
    <div class="col order-1">
        <lonjsko/>
    </div>
    </div>
    
    
</div>
</template>

<script>
import biokovo from '@/components/priroda/biokovo.vue';
import brijuni from '@/components/priroda/brijuni.vue';
import kopacki from '@/components/priroda/kopacki.vue';
import krka from '@/components/priroda/krka.vue';
import lonjsko from '@/components/priroda/lonjsko.vue';
import mljet from '@/components/priroda/mljet.vue';
import paklenica from '@/components/priroda/paklenica.vue';
import papuk from '@/components/priroda/papuk.vue';
import plitvice from '@/components/priroda/plitvice.vue';
import risnjak from '@/components/priroda/risnjak.vue';
import ucka from '@/components/priroda/ucka.vue';
import vransko from '@/components/priroda/vransko.vue';

export default{
    name: 'Natural',
    components: {
        biokovo,
        brijuni,
        kopacki,
        krka,
        lonjsko,
        mljet,
        paklenica,
        papuk,
        plitvice,
        risnjak,
        ucka,
        vransko
    },
};

</script>

<style lang="scss">
.card{
    margin: 10px;
    background-color:rgb(206, 127, 54);
    
}

</style>