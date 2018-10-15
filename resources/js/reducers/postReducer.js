const postReducer = (state = {
    body:"",
    title:""
}, action) => {
    switch (action.type) {
        case "SET_POST_BODY":
            state = {
                ...state,
                body: action.payload
            };
            break;
        case "SET_POST_TITLE":
            state = {
                ...state,
                title: action.payload
            };
            break;
    }
    return state;
};

export default postReducer;