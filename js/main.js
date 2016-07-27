import React from 'react';
import ReactDom from'react-dom';



import {Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router';



import {
	AppComponent
} from './views';

ReactDom.render(<AppComponent/>, document.getElementById('root'));
