const app = Vue.createApp({
    data(){
        return{
            detailAreVisible: false,
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
        toggleDetails(){
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
});

app.mount('#app');