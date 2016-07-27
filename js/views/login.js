import React from 'react';
import ReactDOM from 'react-dom';



export default React.createClass({
	login(e){
		e.preventDefault();
		let email = ReactDOM.findDOMNode(this.refs.email).value;
		let password = ReactDOM.findDOMNode(this.refs.password).value;
		let submitBtn = ReactDOM.findDOMNode(this.refs.submitBtn);

		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
		let errorCode = error.code;
		let errorMessage = error.message;

		if(errorCode === 'auth/wrong-password'){
			console.log('Wrong Password');
		} else {
			console.log(errorMessage);
		}

		});

		let emailElem = ReactDOM.findDOMNode(this.refs.email);
		let passElem = ReactDOM.findDOMNode(this.refs.password);
		emailElem.disabled = 'true';
		passElem.disabled = 'true';
		submitBtn.disabled = 'true';

		let logging = ReactDOM.findDOMNode(this.refs.logging);

		logging.style.display = 'inline-block';

		firebase.auth().onAuthStateChanged(function(user){
				if(user){

					logging.textContent = 'You have been logged in to our site';
					console.log(user);
					
				} else {
					
				}
		});

	},
	render(){
		return(
			<div>
				<h2>Login</h2>
				<form>
					<input ref="email" placeholder="Email" type="email" required />
					<input ref="password" placeholder="Password" type="text" required />
					<button ref="submitBtn" onClick={this.login}>Submit</button>
				</form>
				<h3 ref="logging" id="logging">You are logging in</h3>
			</div>
					);
	}
})