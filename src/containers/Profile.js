import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/stylesheets/Profile.css';

import { Form, Icon, Input } from 'semantic-ui-react';
import LoggedInHOC from '../HOC/LoggedInHOC';
import Modal from '../components_profile/resultModal';

class Profile extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		name: this.props.name,
		username: this.props.username,
		password: '',
		new_password: '',
		toggle: false,
		result_text: '',
	};

	handleChange = (e, key) => {
		let val = e.target.value;
		console.log(e);
		this.setState({
		  [key]: val
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { name, username, password, new_password } = this.state;
		console.log('handleSubmit');
		fetch(`http://localhost:3000/users/${this.props.id}`, {
		  method: "PATCH",
		  headers: {
		    "Content-Type": "application/json",
		    Accept: "application/json",
		    credentials: 'include'
		  },
		  body: JSON.stringify({ name, username, password, new_password})
		})
		.then(resp => resp.json())
		.then(data => {
		  console.log("returned profile patch data", data)
		//   setState result text
		})
		.catch(err => {
		  console.log(err)
		});
	};

	openModal = () => {
		this.setState({
			toggle: true
		})
	}
	closeModal = () =>{
		this.setState({
			toggle:false,
			result_text: ''
		})
	}

	render() {
		return (
			<div className="profile">
				<div className="profile-center-container">
					<Modal isOpen={this.state.toggle} close={this.closeModal} text={this.state.result_text}/>
					<div className="profile-center">
						<h2 className="profile-name">Username:</h2>
						<p className="username">{this.state.username}</p>
						Please enter your current password and any other field you would like to change.
						<Form onSubmit={(e) => this.handleSubmit(e)}>
							<Form.Field onChange={(e) => this.handleChange(e, "newname")}>
								<label className="profile-label">New Name:</label>
								<input className="input" placeholder={this.props.name} />
							</Form.Field>
							<Form.Field>
								<label className="profile-label">Current Password:</label>
								<input placeholder="Current Password" type="password" onChange={e => this.handleChange(e, "password")} />
							</Form.Field>
							<Form.Field>
								<label className="profile-label">New Password:</label>
								<input placeholder="New Password" type="password" onChange={e => this.handleChange(e, "new_password")} />
							</Form.Field>
							<Form.Button inverted icon className="profile-submit">
								<span>Confirm Changes </span>
								<Icon name="pencil" />
							</Form.Button>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

const sToP = (state) => {
	return {
		name: state.manageLogin.name,
		username: state.manageLogin.username,
		id: state.manageLogin.id
	};
};

const dToP = (dispatch) => ({
	login: (data) => dispatch({ type: 'LOGIN', name: data.name, username: data.username })
});

export default LoggedInHOC(connect(sToP, dToP)(Profile));
