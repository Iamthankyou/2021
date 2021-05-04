<template>
  <button @click="confirmInput">Confirm switch router</button>
  <button @click="saveChange">Save</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './components/users/UserItem.vue';

export default {
  data(){
    return {
      changesSaved: false
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods:{
    confirmInput(){
      // do something
      this.$router.push('/teams');
    },

    saveChange(){
      this.chagesSaved = true;
    }
  },

  beforeRouteEnter(to, from, next){
    next();
  },
  beforeRouteLeave(to, from,next){
    if (this.changesSaved){
      next();
    }
    else{
      const agree = prompt("Are you sure ? yout got unsaved changes");
      next(agree);
    }
  },
  unmounted(){
    console.log('Unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>