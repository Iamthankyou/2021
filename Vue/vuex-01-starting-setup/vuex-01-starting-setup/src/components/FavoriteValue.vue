<template>
    <h1>{{counter}}</h1>
    <h1>We do more...</h1>
</template>

<script>
export default {
    computed:{
        counter(){
          return this.$store.getters.normalizedCounter;
        }
    },
}
</script>