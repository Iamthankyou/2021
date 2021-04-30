const app = Vue.createApp({
    data(){
        return {
            courseGoalA: 'This is data of courseGoalA',
            courseGoalB: 'This is data of courseGoalB',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            
            if (randomNumber<0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal')