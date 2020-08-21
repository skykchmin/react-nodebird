export const initalState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'skykchmin',
        },
        content: '첫번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: ''
        }, {
            src: ''
        }, {
            src: ''
        }],
        Commments: [{
            User: {
                nickname: 'skykchmin',
            },
            content: '원본',
        }, {
            User: {
                nickname: 'kchmin',
            },
            content: '수정',
        }]
    }],
    imagePath: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,

}

const dummyPost ={
    id: 1,
    User: {
        id: 1,
        nickname: 'skykchmin',
    },
    content: '더미데이터입니다.',
    Images: [],
    Commments: [],
}

const reducer = (state = initalState, action) => {
    switch (action.type){
        case ADD_POST:
        return{
            ...state,
            mainPosts: [dummyPost, ...state.mainPosts],
            postAdded: true,
        };
        default:
            return state;
    }
}

export default reducer;