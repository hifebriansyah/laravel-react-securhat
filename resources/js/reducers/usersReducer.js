const usersReducer = (state = {
    users : [],
    user : null
}, action) => {
    switch (action.type) {
        case "USERS_CONCAT":
            state = {
                ...state,
                users: state.users.concat(action.payload)
            };
            break;
        case "USER_SET":
            state = {
                ...state,
                user: action.payload
            };
            break;
    }
    return state;
};

export default usersReducer;