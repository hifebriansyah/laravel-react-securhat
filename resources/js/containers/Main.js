import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory"
import {connect} from "react-redux";

import Posts from '../components/Posts';
import Notifications from '../components/Notifications';
import Messages from '../components/Messages';
import Compose from '../components/Compose';
import User from '../components/User';
import Fab from '../components/Fab';
import Navbar from '../components/Navbar';
import Listener from '../components/Listener';
import UnderDevelopment from '../components/UnderDevelopment';

var y = 0

class Main extends React.Component {
	shouldComponentUpdate() {
		return this.checkAuth()
	}

	checkAuth() {
		if(this.props.auth.token === false || localStorage.getItem('token') === null) {
			localStorage.removeItem('token');
		    window.location.replace('./login');
		}

		return true;
	}

    commentClick(id) {
    }

    likeClick(id) {
        fetch(url+"/api/post/"+id+"/like", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            if(response.status == 401){
                this.props.setAuthToken(false)
                
                return Promise.reject()
            }

            return response.json();
        })
        .then(result => {
            var post = this.props.posts.data[id];

            if(result.data.attached){
                this.props.setPostsLiked({
                    key : id,
                    val : true
                })
            }

            if(result.data.detached){
                this.props.setPostsLiked({
                    key : id,
                    val : false
                })
            }
        });
    }

	fabClick() {
		if(this.props.fab.to == "/compose#save"){
			fetch(url+"/api/post", {
				method: 'POST',
	  			body: JSON.stringify(this.props.post),
	            headers: {
	            	"Content-Type": "application/json",
	                'Authorization': 'Bearer ' + localStorage.getItem('token')
	            }
	        })
	        .then(response => {
                if(response.status == 401){
                    this.props.setAuthToken(false)
                    
                    return Promise.reject()
                }

				return response.json();
	        })
	        .then(result => {
                if(result.errors){
                	this.props.setPostErrors(result.errors);
                	return
                }

	        	this.props.clearPost();
	        	this.props.submitPost(result.data);
	        	this.props.setFab({path:"submitted", icon:"times", to:"/"});
	        });
	    }

	    if(this.props.fab.path == "submitted"){
			this.props.clearPost();
	    }
	}

	signOut() {
		localStorage.removeItem('token');
		this.checkAuth();
	}

	render() {
		return(
			<Router>
				<div>	
					<Route render={(props) => <Listener {...props}
						setFab={(e) => this.props.setFab(e)}
						setPostsClass={(e) => this.props.setPostsClass(e)}
                        posts={this.props.posts} />} />

					<Navbar
						signOut={(e) => this.signOut(e)} />

					<Fab
						fab={this.props.fab}
						fabClick={(e) => this.fabClick(e)} />

					<Switch>
						<Route exact
							path="/"
							render={(props) => <Posts {...props}
                            likeClick={(id) => this.likeClick(id)}
                            commentClick={(id) => this.commentClick(id)}
							concatPosts={(e) => this.props.concatPosts(e)}
							isMorePosts={(e) => this.props.isMorePosts(e)}
							setPostsHref={(e) => this.props.setPostsHref(e)}
							clearPosts={(e) => this.props.clearPosts(e)}
							setAuthToken={(e) => this.props.setAuthToken(e)}
							posts={this.props.posts} />}/>

						<Route exact
							path="/compose"
							render={() => <Compose
								setPost={(e) => this.props.setPost(e)}
								post={this.props.post} />}/>
						
						<Route exact path="/messages" component={UnderDevelopment} />
						<Route exact path="/notifications" component={UnderDevelopment} />
						<Route path="/:id" component={User} />
					</Switch>
				</div>
	    	</Router>
		)
	}
}

const mapStateToProps = (state) => {
  return {
      post: state.post,
      posts: state.posts,
      fab: state.fab,
      auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPost: (body) => {
            dispatch({
                type: "SET_POST_BODY",
                payload: body
            });
        },
        concatPosts: (fab) => {
            dispatch({
                type: "CONCAT_POSTS",
                payload: fab
            });
        },
        isMorePosts: (fab) => {
            dispatch({
                type: "IS_MORE_POSTS",
                payload: fab
            });
        },
        setPostsHref: (fab) => {
            dispatch({
                type: "SET_POSTS_HREF",
                payload: fab
            });
        },
        setPostsClass: (fab) => {
            dispatch({
                type: "SET_POSTS_CLASS",
                payload: fab
            });
        },
        clearPosts: (fab) => {
            dispatch({
                type: "CLEAR_POSTS",
                payload: fab
            });
        },
        setFab: (fab) => {
            dispatch({
                type: "SET_FAB",
                payload: fab
            });
        },
        clearPost: (fab) => {
            dispatch({
                type: "CLEAR_POST",
                payload: fab
            });
        },
        submitPost: (fab) => {
            dispatch({
                type: "SUBMIT_POST",
                payload: fab
            });
        },
        setAuthToken: (fab) => {
            dispatch({
                type: "SET_AUTH_TOKEN",
                payload: fab
            });
        },
        setPostErrors: (fab) => {
            dispatch({
                type: "SET_POST_ERRORS",
                payload: fab
            });
        },
        setPostsLiked: (fab) => {
            dispatch({
                type: "SET_POSTS_LIKED",
                payload: fab
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);