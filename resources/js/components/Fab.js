import React from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Fab = (props) => {
	return(
		<div className={"fab " + props.fab.path }>
			<Link className="fab-action-button" to={props.fab.to} onClick={(e) => props.fabClick(e)}>
				<FontAwesomeIcon icon={props.fab.icon} />
			</Link>
		</div>
	)
}

export default Fab;