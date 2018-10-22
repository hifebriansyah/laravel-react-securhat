require('../bootstrap');

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import Main from '../containers/Main';
import store from "../store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {far} from '@fortawesome/free-regular-svg-icons'
import {
	faUser,
	faBell,
	faEnvelope,
	faHome,
	faPen,
	faCheck,
	faShareSquare,
	faTimes,
	faComment,
	faHeart,
	faPowerOff,
	faHeartbeat
} from '@fortawesome/free-solid-svg-icons'

library.add(
	far,
	faUser,
	faBell,
	faEnvelope,
	faHome,
	faPen,
	faCheck,
	faShareSquare,
	faTimes,
	faComment,
	faHeart,
	faPowerOff,
	faHeartbeat
);

store.subscribe(() => {
	//console.log(store.getState());
});

render(
	<Provider store={store}><Main /></Provider>,
	document.getElementById("root")
);