<template>
    <button @click="login" v-if="!userIsAuthenticated">Login</button>
    <button @click="logout" v-if="userIsAuthenticated">Logout</button>
    <p>{{testAuth}}</p>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
    methods:{
        ...mapActions(['login','logout']),
    },

    computed:{
        ...mapGetters(['userIsAuthenticated','testAuth']),
    }

}
</script>
    
<style scoped>

</style>