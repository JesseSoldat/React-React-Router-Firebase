import React from 'react';
import ReactDom from'react-dom';

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDrBaMFNOe8j8q22qg7uuPECOwqJAr27v8",
    authDomain: "reactfire-709f3.firebaseapp.com",
    databaseURL: "https://reactfire-709f3.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

import {Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router';

import {
	WelcomeComponent,
	RegisterComponent,
	LoginComponent,
	AddProfileComponent
} from './views';

ReactDom.render((
	<Router history={hashHistory}>
		<Route path="/" component={WelcomeComponent}>
			<Route path="register" component={RegisterComponent} />
			<Route path="login" component={LoginComponent} />
		</Route>
	</Router>

), document.getElementById('root'));
