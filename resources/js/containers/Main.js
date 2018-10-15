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

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell, faEnvelope, faHome, faPen, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faUser);
library.add(faBell);
library.add(faEnvelope);
library.add(faHome);
library.add(faPen);
library.add(faCheck);

class Main extends React.Component {
	render() {
		return(
			<Router>
				<div>
					<Navbar />
					
					<Route render={(props) => <Fab {...props} />} />

					<Switch>
						<Route exact path="/" component={Posts} />
						
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
      post: state.post
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPost: (body) => {
            dispatch({
                type: "SET_POST_BODY",
                payload: body
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);