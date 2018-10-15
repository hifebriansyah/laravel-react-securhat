const fabReducer = (state = {
    path:"hide",
    icon:"pen",
    to:"/compose"
}, action) => {
    switch (action.type) {
        case "SET_FAB":
            state = action.payload;
            break;
    }
    return state;
};

export default fabReducer;