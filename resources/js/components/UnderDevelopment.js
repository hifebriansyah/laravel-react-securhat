import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UnderDevelopment = (props) => {
	return(
		<div className="component-under-development">
			<a><FontAwesomeIcon className="heartbeat" icon="heartbeat" /></a>
			<p>Page is under development</p>
		</div>
	)
}

export default UnderDevelopment ;