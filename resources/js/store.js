import {createStore, combineReducers, applyMiddleware} from "redux";

import posts from "./reducers/postsReducer";
import post from "./reducers/postReducer";
import postComment from "./reducers/postCommentReducer";
import users from "./reducers/usersReducer";
import fab from "./reducers/fabReducer";
import auth from "./reducers/authReducer";

export default createStore(
    combineReducers({
        posts,
        post,
        postComment,
        users,
        fab,
        auth
    })
);
