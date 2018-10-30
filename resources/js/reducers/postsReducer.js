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
                ...state
            };

            action.payload.forEach(function(element) {
                if(!state.data[element.id]) {
                    state.data[element.id] = element;
                }
            });

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
        case "SET_POSTS_LIKED":
            state = {...state};

            state.data[action.payload.key].liked = action.payload.val;

            state.data[action.payload.key].like_counts = (action.payload.val)
                ? state.data[action.payload.key].like_counts + 1 || 1
                : state.data[action.payload.key].like_counts - 1 || '';
            
            break;

    }
    return state;
};

export default postsReducer;