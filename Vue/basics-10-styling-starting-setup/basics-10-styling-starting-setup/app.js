const app = Vue.createApp({
    data(){
        return {
            boxASelected:false,
            boxBSelected:false,
            boxCselected:false,
        }
    },
    
    methods:{  
        boxSelected(box){
            if (box === 'A'){
                this.boxASelected = true;
            }
            else if (box === 'B'){
                this.boxBSelected = true;
            }
            else {
                this.boxCSelected = true;
            }
        }
    }
});

app.mount('#styling')