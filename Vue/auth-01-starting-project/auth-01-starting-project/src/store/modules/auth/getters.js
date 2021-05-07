export default{
    userId(state){
        return state.userId;
    },

    token(state){
        return state.token;
    },

    isAuthenticated(state){
        // console.log(state.token!==null);
        return state.token!==null;
    },

    didAutoLogout(state){
        return state.didAutoLogout;
    }
}