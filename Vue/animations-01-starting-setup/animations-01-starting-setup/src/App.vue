<template>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <transition name="para" @enter="enter" @after-enter="afterEnter" @before-enter="beforeEnter" @before-leave="beforeLeave">
      <p v-if="paraIsVisible">This is a pararaaph</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUser" v-if="!userAreVisible">Show Users</button>
      <button @click="hideUser" v-else>Hide Users</button>
    </transition> 
  </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      userAreVisible: false
       };
  },
  methods: {
    showUser(){
      this.userAreVisible = true;
    },
    
    hideUser(){
      this.userAreVisible = false;
    },

    showDialog() {
      this.dialogIsVisible = true;
    },

    hideDialog() {
      this.dialogIsVisible = false;
    },

    animateBlock(){
      this.animatedBlock = true;
    },

    toggleParagraph(){
      this.paraIsVisible = !this.paraIsVisible;
    },

    beforeEnter(el){
      console.log('Before Enter');
      console.log(el);
    },

    beforeLeave(el){
      console.log('Before Leave');
      console.log(el);
    },

    enter(){
      console.log('Enter');
    },

    afterEnter(){
      console.log('After Enter');
    }
  },
};
</script>

<style>
.animate{
  /* transform: translateX(-50px); */
  animation: slide-fade 0.3s ease-out forwards;
}

.para-enter-from{
  /* opacity: 0;
  transform: translateY(-30px); */
}

.para-enter-active{
  /* transition: all 0.3s ease-out; */
  animation: slide-scale 0.3s ease-out;
}

.para-enter-to{
  /* opacity: 1;
  transform: translateY(0); */
}

.para-leave-from{
  /* opacity: 1;
  transform: translateY(0); */
}

.para-leave-active{
  /* transition: all 0.3s ease-in; */
  animation: slide-scale 0.3s ease-out;

}

.para-leave-to{
   /* opacity: 0;
  transform: translateY(30px);  */
}

.modal-enter-from{

}

.modal-enter-active{
  animation: model 0.3s ease-out;
}

.model-enter-from{
}

.fade-button-enter-from{
  opacity:0;
}

.fade-button-enter-active{
  transition: opacity 0.3s ease-out;
}

.fade-button-enter-to{
  opacity:1;
}

.fade-button-leave-active{
  transition: opacity 0.3s ease-in;
}

@keyframes modal{
  from{
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to{
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slide-scale{
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100%{
    transform: translateX(-150px) scale(1);
  }
}

* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>