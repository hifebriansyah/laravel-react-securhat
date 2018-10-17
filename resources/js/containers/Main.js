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

class Main extends React.Component {
	shouldComponentUpdate() {
		return this.checkAuth()
	}

	checkAuth() {
		if(this.props.auth.token === false || localStorage.getItem('token') === null) {
			localStorage.getItem('token');
		    window.location.replace('./login');
		}

		return true;
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
	            return response.json();
	        })
	        .then(result => {
	        	this.props.clearPost();
	        	this.props.submitPost(result.data);
	        	this.props.setFab({path:"submitted", icon:"times", to:"/"});
	        });
	    }

	    if(this.props.fab.path == "submitted"){
			this.props.clearPost();
	    }
	}

	render() {
		return(
			<Router>
				<div>	
					<Route render={(props) => <Listener {...props}
						setFab={(e) => this.props.setFab(e)}
						setPostsClass={(e) => this.props.setPostsClass(e)} />} />

					<Navbar />

					<Fab
						fab={this.props.fab}
						fabClick={(e) => this.fabClick(e)} />

					<Posts
						concatPosts={(e) => this.props.concatPosts(e)}
						isMorePosts={(e) => this.props.isMorePosts(e)}
						setPostsHref={(e) => this.props.setPostsHref(e)}
						clearPosts={(e) => this.props.clearPosts(e)}
						setAuthToken={(e) => this.props.setAuthToken(e)}
						posts={this.props.posts} />

					<Switch>
						<Route exact
							path="/compose"
							render={() => <Compose
								setPost={(e) => this.props.setPost(e)}
								post={this.props.post} />}/>
						
						<Route exact path="/messages" component={Messages} />
						<Route exact path="/notifications" component={Notifications} />
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);