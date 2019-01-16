const defPostsState = {
    data: [],
    hasMoreItems: true,
    nextHref: null,
    class: '',
    indexes: []
}

const postsReducer = (state = {...defPostsState}, action) => {
    switch (action.type) {
        case "CONCAT_POSTS":
            state = {...state};

            action.payload.forEach(function(element) {
                if(state.indexes[element.id] === undefined) {
                    element.hasMoreComments = true;

                    if(element.comments){
                        var comments = [];
                        element.comments.forEach(function(comment) {
                            element.comments[comment.id] = comment;
                        });
                    }
                    
                    element.comments = comments;
                    element.comment_indexes = [];

                    state.indexes[element.id] = state.data.push(element) - 1;
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

            state.data[state.indexes[action.payload.key]].liked = action.payload.val;

            state.data[state.indexes[action.payload.key]].like_counts = (action.payload.val)
                ? state.data[state.indexes[action.payload.key]].like_counts + 1 || 1
                : state.data[state.indexes[action.payload.key]].like_counts - 1 || '';
            
            break;

        // === POST COMMENTS === //

        case "CONCAT_POST_COMMENTS":
            state = {...state};

            action.payload.data.forEach(function(element) {
                if(state.data[state.indexes[action.payload.key]].comment_indexes[element.id] === undefined) {
                    state.data[state.indexes[action.payload.key]].comment_indexes[element.id] = state.data[state.indexes[action.payload.key]]['comments'].push(element) - 1;
                }
            });

            break;
        case "IS_MORE_POST_COMMENTS":
            state = {...state};
            state.data[state.indexes[action.payload.key]].hasMoreComments = action.payload.val;
            break;
        case "SET_POST_COMMENTS_HREF":
            state = {...state};
            state.data[state.indexes[action.payload.key]].commentsNextHref = action.payload.val;
            break;

    }
    return state;
};

export default postsReducer;