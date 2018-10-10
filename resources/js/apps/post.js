require('../bootstrap');

if(localStorage.getItem('token') === null) {
	console.log(localStorage.getItem('token') === null);
	console.log(localStorage.getItem('token'))
    window.location.replace('./');
}

import React from "react";
import ReactDOM from "react-dom";
import Posts from '../components/Posts';
import Fab from '../components/Fab';
import Header from '../components/Header';

if (document.getElementById("root")) {
    ReactDOM.render(
    	<div>
	    	<Header />
	    	<Fab />
	    	<Posts />
    	</div>,
    	document.getElementById("root")
    );
}