import React, { Component } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from "react-redux";

class Fab extends Component {
	componentDidMount() {
		this.onRouteChanged(this.props.location.pathname)
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

		if (pathname == "/") {
			path = "new";
			to = "/compose";
		} else if (pathname == "/compose") {
			path = "submit";
			icon = "check";
			to = "/compose#save";
		}

		this.props.setFab({path, icon, to})
	}

	handleClick() {
		console.log(this.props.post);
	}

    render() {
		return (
			<div className={"fab " + this.props.fab.path }>
				<Link className="fab-action-button" to={this.props.fab.to} onClick={()=>this.handleClick()}>
					<FontAwesomeIcon icon={this.props.fab.icon} />
				</Link>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
      fab: state.fab,
      post: state.post
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFab: (fab) => {
            dispatch({
                type: "SET_FAB",
                payload: fab
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fab);