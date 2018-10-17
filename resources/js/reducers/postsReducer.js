const defPostsState = {
    data: [],
    hasMoreItems: true,
    nextHref: null,
    class: ''
}

const postsReducer = (state = {...defPostsState}, action) => {
    switch (action.type) {
        case "CONCAT_POSTS":
            state = {
                ...state,
                data: state.data.concat(action.payload)
            };
            break;
        case "IS_MORE_POSTS":
            state = {
                ...state,
                hasMoreItems: action.payload
            };
            break;
        case "SET_POSTS_HREF":
            state = {
                ...state,
                nextHref: action.payload
            };
            break;
        case "SET_POSTS_CLASS":
            state = {
                ...state,
                class: action.payload
            };
            break;
        case "CLEAR_POSTS":
            state = {...defPostsState};
            break;

    }
    return state;
};

export default postsReducer;