const app = Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id: 'manuel',
                    name: 'Nguyễn Quỳnh Anh',
                    phone: '0123456789',
                    email: 'quanh@gmail.com'
                },

                {
                    id: 'jullie',
                    name: 'Julie Jones',
                    phone: '00000000000',
                    email: 'jone@gmail.com'
                }
            ]
        }
    },

    methods: {
        toggleDetails(  ){
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
});

app.component('friend-contact', {
    template: `
    <li v-for="friend in friends" :key="friend.id">
        <h2>{{friend.name}}</h2>
        <button @click = "toggleDetails">{{detailAreVisible ? 'Hide': 'Show'}} Details</button>
        <ul v-if="detailAreVisible  ">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
    </li>
    `,
    data(){
        return {
            detailAreVisible: false,
            friends:[
                {
                    id: 'manuel',
                    name: 'Nguyễn Quỳnh Anh',
                    phone: '0123456789',
                    email: 'quanh@gmail.com'
                }
            ]
        };
    },

    methods:{
        toggleDetails(){
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
});

app.mount('#app');