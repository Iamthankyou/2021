export default {
    setAuth(state, payload){
        state.isLoggedIn = payload.isAuth;
        console.log(state.isLoggedIn);
    }
}

