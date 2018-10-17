const authReducer = (state = {
    token:true
}, action) => {
    switch (action.type) {
        case "SET_AUTH_TOKEN":
            state = {
                ...state,
                token: action.payload
            };
            break;
    }
    return state;
};

export default authReducer;