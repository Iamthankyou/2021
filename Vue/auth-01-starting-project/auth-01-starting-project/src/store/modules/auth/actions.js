export default{
    login(){

    },

    async signup(context, payload){
        console.log(payload.email);
        console.log(payload.password);

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCoaDCizDyoiA_au-nMW9rdqE5yqqoWeks', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            }),
        });

        const responseData = await response.json();

        if (!response.ok){
            console.log(responseData);
            const error = new Error(responseData.message || 'Faile to authenticated');
            throw error;
        }

        console.log(responseData);
        context.commit('setUser',{
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expriresIn
        });
    }
}