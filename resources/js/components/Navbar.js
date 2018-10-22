import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = (props) => {
	return(
		<nav className="navbar component-header navbar-expand sticky-top">
			<div>
				<Link className="nav-link" to="/"><FontAwesomeIcon icon="home" /></Link>
				<Link className="nav-link" to="/messages"><FontAwesomeIcon icon="envelope" /></Link>
				<Link className="nav-link" to="/notifications"><FontAwesomeIcon icon="bell" /></Link>
				<Link className="nav-link" to="#out" onClick={(e) => props.signOut(e)}><FontAwesomeIcon icon="power-off" /></Link>
			</div>
		</nav>
	)
}

export default Navbar ;