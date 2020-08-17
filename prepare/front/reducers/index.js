const initalState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
}

const login = (data) => {
    return{
        type: 'LOG_IN',
        data,
    }
}

// action creator 
const changeNickname = (data) => { //action을 만들어내는 creator 
    
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
}

// (이전상태, 액션) => 다음상태
const rootReducer = ((state = initalState, action) => {
    switch ( action.type){
        case 'CHANGE_NICKNAME':
            return{
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                }
            }
    }
});

export default rootReducer;