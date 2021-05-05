<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-counter></the-counter>
    <change-counter></change-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Click</button>
  </base-container>
  <base-container title="Auth" v-if="!userIsAuthenticated">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import {mapGetters} from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },


  methods:{
    addOne(){
      // this.$store.state.counter++;
      this.$store.dispatch({
        type:'increase',
        value: 10
      });
    }
  },

  computed:{
      ...mapGetters(['userIsAuthenticated'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>