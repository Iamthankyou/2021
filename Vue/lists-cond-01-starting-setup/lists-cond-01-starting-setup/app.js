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
    },

    removeGoal(index){
      this.goals.splice(index,1);
    }
  }
});

app.mount('#user-goals');
