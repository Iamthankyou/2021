const app = Vue.createApp({
    data(){
        return {
            courseGoalA: '<h2>This is data of courseGoalA</h2>',
            courseGoalB: '<h2>This is data of courseGoalB</h2>',
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