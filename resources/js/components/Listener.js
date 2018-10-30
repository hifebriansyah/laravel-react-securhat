import React, { Component } from "react"

class Listener extends Component {
	componentDidMount() {
		this.onRouteChanged(this.props.location.pathname)
	}

	shouldComponentUpdate(prevProps) {
		if(this.props.location.pathname == "/" && window.pageYOffset != 0){
        	window.y = window.pageYOffset;
		}

		return true;
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.onRouteChanged(this.props.location.pathname)
		}
	}

	onRouteChanged(pathname) {
		var path = "hide";
		var icon = "pen";
		var to = "/"
		var postsClass = "hide";

		if (pathname == "/") {
			path = "new";
			to = "/compose";
			postsClass = "";
		} else if (pathname == "/compose") {
			path = "submit";
			icon = "check";
			to = "/compose#save";
		}

		this.props.setFab({path, icon, to})
		this.props.setPostsClass(postsClass);
	}

    render() {
		return (
			<div></div>
		)
	}
}

export default Listener;