const postsReducer = (state = {
    data: [],
    hasMoreItems: true,
    nextHref: null
}, action) => {
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
    }
    return state;
};

export default postsReducer;