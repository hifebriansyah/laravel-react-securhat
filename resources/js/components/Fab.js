import React, { Component } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Fab extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            path: null,
            icon: "pen"
        }
    }

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

		if (pathname == "/") {
			path = "new";
		} else if (pathname == "/compose") {
			path = "submit top";
			icon = "check";
		}

		console.log(icon);

		this.setState({path, icon})
	}

    render() {
		return (
			<div className={"fab " + this.state.path }>
				<Link className="fab-action-button" to="/compose">
					<FontAwesomeIcon icon={this.state.icon} />
				</Link>
			</div>
		)
	}
}

export default Fab