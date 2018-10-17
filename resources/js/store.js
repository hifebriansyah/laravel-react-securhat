import {createStore, combineReducers, applyMiddleware} from "redux";

import posts from "./reducers/postsReducer";
import post from "./reducers/postReducer";
import users from "./reducers/usersReducer";
import fab from "./reducers/fabReducer";
import auth from "./reducers/authReducer";

export default createStore(
    combineReducers({
        posts,
        post,
        users,
        fab,
        auth
    })
);
