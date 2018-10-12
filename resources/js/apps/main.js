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
import Compose from '../components/Compose';
import User from '../components/User';
import Fab from '../components/Fab';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell, faEnvelope, faHome, faPen, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faUser);
library.add(faBell);
library.add(faEnvelope);
library.add(faHome);
library.add(faPen);
library.add(faCheck);

class App extends React.Component {


	componentDidUpdate(nextProps) {

history.listen((location, action) => {
  console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
  console.log(`The last navigation action was ${action}`)
})

}
	render() {
		return(
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Fab} />
						<Route exact path="/messages" component={Fab} />
						<Route exact path='/compose' render={(props) => <Fab {...props} isAuthed={true} />}/>
					</Switch>
					<Switch>
						<Route exact path="/" component={Posts} />
						<Route exact path="/compose" component={Compose} />
						<Route exact path="/messages" component={Messages} />
						<Route exact path="/notifications" component={Notifications} />
						<Route path="/:id" component={User} />
					</Switch>
				</div>
	    	</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));