<template>
    <button @click="inc">Add 10</button>
    <button @click="increase({value: 1000})">Add 10</button>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    methods:{
        // addOne(){
        //     this.$store.dispatch('increase', {value:100});
        // }

        // ...mapActions(['increment','increase'])

        ...mapActions({
            inc: 'increment',
            increase: 'increase'
        })
    }
}
</script>