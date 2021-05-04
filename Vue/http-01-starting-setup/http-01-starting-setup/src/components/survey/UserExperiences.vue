<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExpreiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (results.length===0)">No stored expreriences foun. Start adding some survey experienes</p>
      <p v-else-if="!isLoading && error">Error Messgge: {{error}}</p>
      <ul v-else>
        <survey-result
          v-for="result in results" 
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  
  data(){
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },

  methods:{
    loadExpreiences(){
      this.isLoading = true;
      fetch('https://vue-http-demo-957e5-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json').then((response)=>{
        if (response.ok){
          return response.json();
        }
      }).then((data)=>{
        this.isLoading = false;
        const results = [];
        console.log(data);
      for (const id in data){
          results.push({id: id, name: data[id].name, rating: data[id].rating});
        }
        this.results = results;
        })
        .catch((error)=>{
          this.error = error;
        });
    }
  },

  mounted(){
    this.loadExpreiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>