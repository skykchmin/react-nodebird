export const initalState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return{
        type: 'LOG_IN',
        data,
    }
};

export const logoutAction = () => {
    return{
        type: 'LOG_OUT',

    }
};

const reducer = (state = initalState, action) => {
    switch (action.type){
        case 'LOG_IN':
            return{
                ...state, // inital객체 
                isLoggedIn: true, //바꾸고 싶은 부분만 만들면 된다.
                me: action.data,
                
            };
        case 'LOG_OUT':
            return{
                ...state, // inital객체 
                isLoggedIn: false, //바꾸고 싶은 부분만 만들면 된다.
                me: null,
                
            };
        default:
            return state;   
    }
}

export default reducer;