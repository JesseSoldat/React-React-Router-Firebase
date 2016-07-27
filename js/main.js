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
	AddProfileComponent
} from './views';

ReactDom.render(<AddProfileComponent/>, document.getElementById('root'));
