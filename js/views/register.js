import React from 'react'; 
import ReactDOM from 'react-dom';
import firebase from 'firebase';



export default React.createClass({
	register(e){
		e.preventDefault();
		let email = ReactDOM.findDOMNode(this.refs.email).value;
		let password = ReactDOM.findDOMNode(this.refs.password).value;
		let submitBtn = ReactDOM.findDOMNode(this.refs.submitBtn);

		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
			let errorCode = error.code;
			let errorMessage = error.message;
			if(errorCode == 'auth/weak-password'){
				console.log('The password is weak');
			} else {
				console.log(errorMessage);
			}
			console.log(errorCode);

		});
		let emailElem = ReactDOM.findDOMNode(this.refs.email);
		let passElem = ReactDOM.findDOMNode(this.refs.password);
		emailElem.disabled = 'true';
		passElem.disabled = 'true';
		submitBtn.disabled = 'true';

		let register = ReactDOM.findDOMNode(this.refs.register);

		register.style.display = 'inline-block';

		firebase.auth().onAuthStateChanged(function(user){
				if(user){

					register.textContent = 'You have been registered to our site';
					console.log(user);
					
				} else {
					
				}
		});

	},
	render(){
		return(
			<div>
				<h2>Register</h2>
				<form>
					<input ref="email" placeholder="Email" type="email" required />
					<input ref="password" placeholder="Password" type="text" required />
					<button ref="submitBtn" onClick={this.register}>Submit</button>
				</form>
				<h3 ref="register" id="registering">We are registering you now, please wait a moment</h3>

			</div>
					);
	}
})

