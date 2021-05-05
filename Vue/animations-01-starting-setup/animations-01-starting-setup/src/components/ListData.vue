<template>
    <ul>
        <li v-for="user in users" @click="removeUser(user)" :key="user">{{user}}</li>
    </ul>
    <div>
        <input type="text" ref="userNameInput"/>
        <button @click="addUser">Add Users</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            users: ['Nguyễn Quỳnh Anh', 'Quỳnh Anh', 'Quanh', 'Yêu Quỳnh Anh', 'Lê Quang Duy']
        }
    },
    
    methods: {
        addUser(){
            this.users.unshift(this.$refs.userNameInput.value);
        },
        
        removeUser(user){
            this.users = this.users.filter(f=>f !== user);
        }
    }
}
</script>

<style scoped>
    ul{
        list-style:none;
        margin: 1rem 0;
        padding: 0;
    }

    li{
        border: 1px solid #ccc;
        padding: 1rem;
        text-align: center;
    }
</style>