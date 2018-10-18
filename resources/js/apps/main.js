require('../bootstrap');

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import Main from '../containers/Main';
import store from "../store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	faUser,
	faBell,
	faEnvelope,
	faHome,
	faPen,
	faCheck,
	faRetweet,
	faTimes,
	faComment,
	faHeart,
	faPowerOff,
	faHeartbeat
} from '@fortawesome/free-solid-svg-icons'

library.add(faUser);
library.add(faBell);
library.add(faEnvelope);
library.add(faHome);
library.add(faPen);
library.add(faCheck);
library.add(faRetweet);
library.add(faTimes);
library.add(faComment);
library.add(faHeart);
library.add(faPowerOff);
library.add(faHeartbeat);

store.subscribe(() => {
	//console.log(store.getState());
});

render(
	<Provider store={store}><Main /></Provider>,
	document.getElementById("root")
);