<template>
    <ul>
        <transition-group tag="ul" name="user-list">
            <li v-for="user in users"  @click="removeUser(user)" :key="user">{{user}}</li>
        </transition-group>
    </ul>
    <div>
        <input @keypress.enter="addUser" type="text" ref="userNameInput"/>
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

    .user-list-enter-from{
        opacity: 0;
        transform: translateX(-30px);
    }

    .user-list-enter-active{
        transition: all 0.3s ease-in;
    }

    .user-list-enter-to{    
        opacity: 1;
        transform: translateX(0px);
    }

    .user-list-leave-from{
        opacity: 1;
        transform: translateX(0px);
    }

    .user-list-leave-active{
        transition: all 0.3s ease-out;
    }

    .user-list-leave-to{
        opacity: 0;
        transform: translateX(-30px);
    }

</style>