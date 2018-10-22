const defPostState = {
    body:"",
    title:"",
    submitted:"",
    submittedClass:"",
    errors:[]
}

const postReducer = (state = {...defPostState}, action) => {
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
        case "CLEAR_POST":
            state = {...defPostState};
            break;
        case "SUBMIT_POST":
            state = {
                ...state,
                submitted: action.payload,
                submittedClass: "submitted"
            };
            break;
        case "SET_POST_ERRORS":
            state = {
                ...state,
                errors: action.payload
            };
            break;
    }
    return state;
};

export default postReducer;