export default{
    testAuth(rootState){
        return rootState.isLoggedIn;
    },

    finalCounter(state){
        return state.counter;
    },

    normalizedCounter(state,getters){
        const finalCounter = getters.finalCounter;
        
        if (finalCounter<0){
            return 0;
        }

        if (finalCounter>100){
            return 100;
        }

        return finalCounter;
    },
}