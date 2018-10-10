require('../bootstrap');

import React from "react";
import ReactDOM from "react-dom";
import Login from '../components/Login';
import Header from '../components/Header';

if (document.getElementById("root")) {
    ReactDOM.render(
    	<div>
	    	<Header />
	    	<Login />
    	</div>
    	, document.getElementById("root")
    );
}