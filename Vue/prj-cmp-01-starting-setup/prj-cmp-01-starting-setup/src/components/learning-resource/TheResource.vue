<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="selectedTab === 'stored-resources'? null : 'flat'">Stored Resources </base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="selectedTab === 'add-resource'? null : 'flat'">Add Resources </base-button>
    </base-card>
    
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components:{
        StoredResources,
        AddResource
    },

    provide(){
        return {    
             resources: this.storeResources
        }
    },

    data(){
        return{
            selectedTab: 'stored-resources',
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

    },

    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        }
    }
}
</script>