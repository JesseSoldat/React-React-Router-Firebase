import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render(){
		return(
			<div>
				<h3>Welcome</h3>
				<ul role="nav">
          			<li><Link to="/login" activeStyle={{ color: 'red' }}>Login</Link></li>
 				
          			<li><Link to="/register" activeStyle={{ color: 'red' }}>Register</Link></li>
        		</ul>
				{React.cloneElement(this.props.children)}

			</div>
			);
	}
})