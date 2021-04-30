const app = Vue.createApp({
    data(){
        return {
            boxASelected:false,
            boxBSelected:false,
            boxCSelected:false,
        }
    },
    
    computed:{
        boxAClass(){
            return {active: this.boxASelected};
        },

        boxBClass(){
            return {active: this.boxBSelected};
        }
    },

    methods:{  
        boxSelected(box){
            if (box === 'A'){
                this.boxASelected = !this.boxASelected;
            }
            else if (box === 'B'){
                this.boxBSelected = !this.boxBSelected;
            }
            else {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});

app.mount('#styling')