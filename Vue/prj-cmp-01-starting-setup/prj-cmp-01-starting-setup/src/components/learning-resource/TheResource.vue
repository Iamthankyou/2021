<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="selectedTab === 'stored-resources'? null : 'flat'">Stored Resources </base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="selectedTab === 'add-resource'? null : 'flat'">Add Resources </base-button>
    </base-card>
    
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
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
             resources: this.storeResources,
             addResource: this.addResource
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
        },

        addResource(title, description, link){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            }

            this.storeResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },

        removeResourcd(id){
            this.storeResources = this.storeResources.filter(f=>f.id !==id);
        }
    }
}
</script>