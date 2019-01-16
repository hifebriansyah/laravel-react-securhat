const defPostCommentState = {
    body:"",
    submitted:"",
    submittedClass:"",
    selected:"",
    errors:[]
}

const postCommentReducer = (state = {...defPostCommentState}, action) => {
    switch (action.type) {
        case "SET_POST_COMMENT_BODY":
            state = {
                ...state,
                body: action.payload
            };
            break;
        case "CLEAR_POST_COMMENT":
            state = {...defPostCommentState};
            break;
        case "SUBMIT_POST_COMMENT":
            state = {
                ...state,
                submitted: action.payload,
                submittedClass: "submitted"
            };
            break;
        case "SET_POST_COMMENT_ERRORS":
            state = {
                ...state,
                errors: action.payload
            };
            break;
    }
    return state;
};

export default postCommentReducer;