<template>
    <ul>
        <learning-resource
            v-for="item in storeResources"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :description="item.description"
            :link="item.link"
        ></learning-resource>
    </ul>
</template>

<script>
import LearningResource from './components/learning-resource/LearningResource';
export default {
    components:{
        LearningResource
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