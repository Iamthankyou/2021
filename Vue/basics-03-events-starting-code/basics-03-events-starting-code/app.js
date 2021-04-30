const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName:''
    };
  },
  methods:{
    add(num){
      this.counter+=num;
    },

    sub(num){
      this.counter-=num;
    },

    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },

    submitForm(event){
      alert('Submited');
    },

    confirmInput(){
      this.confirmName = this.name;
    }
    
  }
});

app.mount('#events');
