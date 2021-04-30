const app = Vue.createApp({
  data() {
    return { 
      enterdGoalValue:'',
      goals: [] 
    };
  },
  methods:{
    addGoal(){
      if (this.enterdGoalValue.length>0){
        this.goals.push(this.enterdGoalValue);
      }
    }
  }
});

app.mount('#user-goals');
