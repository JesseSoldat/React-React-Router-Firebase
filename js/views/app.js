import React from 'react';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDrBaMFNOe8j8q22qg7uuPECOwqJAr27v8",
    authDomain: "reactfire-709f3.firebaseapp.com",
    databaseURL: "https://reactfire-709f3.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

export default React.createClass({
	mixins: [ReactFireMixin],

	getInitialState(){
		return {
			users: [],
			name: '',
			city: '',
			state: ''
			

		}

			
	},

	componentWillMount(){
	var firebaseRef = firebase.database().ref('testApp/users');;
    this.bindAsArray(firebaseRef, 'users');
    
	},
	

	handleSubmit(e){
		e.preventDefault();
	
		this.firebaseRefs['users'].push({
			name: this.state.name,
			city: this.state.city,
			state: this.state.state
			
		});
		this.setState({
			name: '',
			city: '',
			state: ''
		})
	},

	handleName(e) {
    	this.setState({name: e.target.value});
  	},
  	handleCity(e) {
    	this.setState({city: e.target.value});

  	},
  	handleState(e) {
    	this.setState({state: e.target.value});

  	},

	render(){
		let createUser = function(user, index){
			return(
			<div key={index}>
				<li>{user.name}</li>
				<li>{user.city}</li>
				<li>{user.state}</li>
			</div>);
		};
		
		return (
			<div>
				<form>
					<input onChange={this.handleName}/>
					<input id="city" onChange={this.handleCity}/>
					<input id="state" onChange={this.handleState}/>
					<button onClick={this.handleSubmit} id="btn">Add</button>
					<ul>{this.state.users.map(createUser)}</ul>
				</form>
			</div>
			);
	}

})