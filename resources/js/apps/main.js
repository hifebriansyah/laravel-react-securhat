require('../bootstrap');

if(localStorage.getItem('token') === null) {
	console.log(localStorage.getItem('token') === null);
	console.log(localStorage.getItem('token'))
    window.location.replace('./login');
}

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import Main from '../containers/Main';
import store from "../store";

store.subscribe(() => {
	console.log(store.getState());
});

render(
	<Provider store={store}><Main /></Provider>,
	document.getElementById("root")
);