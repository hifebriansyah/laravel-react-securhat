import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
	return(
		<nav className="navbar component-header navbar-expand sticky-top">
			<div>
				<Link className="nav-link" to="/"><FontAwesomeIcon icon="home" /></Link>
				<Link className="nav-link" to="/messages"><FontAwesomeIcon icon="envelope" /></Link>
				<Link className="nav-link" to="/notifications"><FontAwesomeIcon icon="bell" /></Link>
				<a className="nav-link" href="/user"><FontAwesomeIcon icon="user" /></a>
			</div>
		</nav>
	)
}

export default Navbar ;