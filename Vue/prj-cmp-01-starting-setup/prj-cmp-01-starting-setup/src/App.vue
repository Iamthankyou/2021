<template>
    <the-header title="RememberMe"></the-header>
    <stored-resources :resources="storeResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resource/StoredResources';
export default {
    components:{
        StoredResources
    },

    data(){
        return {
            storeResources:[
                {
                    id:'official-guide',
                    title:'Official Guide',
                    description:'The official Vue.js documentaion.',
                    link:'https://vuejs.org'
                },
                {
                    id:'google',
                    title:'Google',
                    description:'The official Vue.js documentaion.',
                    link:'https://vuejs.org'
                }
            ]
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>




























