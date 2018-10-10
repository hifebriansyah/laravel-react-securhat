require('../bootstrap');

if(localStorage.getItem('token') === null) {
	console.log(localStorage.getItem('token') === null);
	console.log(localStorage.getItem('token'))
    window.location.replace('./login');
}

import React from "react";
import ReactDOM from "react-dom";
import Posts from '../components/Posts';
import Notifications from '../components/Notifications';
import Messages from '../components/Messages';
import User from '../components/User';
import Fab from '../components/Fab';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faUser);
library.add(faBell);
library.add(faEnvelope);
library.add(faHome);

class App extends React.Component {
	render() {
		return(
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Fab} />
						<Route exact path="/notifications" component={Fab} />
					</Switch>
					<Switch>
						<Route exact path="/" component={Posts} />
						<Route exact path="/notifications" component={Notifications} />
						<Route exact path="/messages" component={Messages} />
						<Route path="/:id" component={User} />
					</Switch>
				</div>
	    	</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));