import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/stylesheets/Profile.css';

import { Form, Icon, Input } from 'semantic-ui-react';
import LoggedInHOC from '../HOC/LoggedInHOC';

class Profile extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		name: this.props.name,
		username: this.props.username,
		password: '',
		newPassword: ''
	};

	handleChange = (e) => {
		// let val = e.target.value;
		console.log(e);
		// let key =
		// this.setState({
		//   [key]: val
		// });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// const { name, username, password, newPassword } = this.state;
		console.log('handleSubmit');
		// fetch(`http://localhost:3000/users/${this.state.user.id}`, {
		//   method: "PATCH",
		//   headers: {
		//     "Content-Type": "application/json",
		//     Accept: "application/json",
		//     credentials: 'include'
		//   },
		//   body: JSON.stringify({ name, username, password, newPassword})
		// })
		// .then(resp => resp.json())
		// .then(data => {
		//   console.log("returned profile patch data", data)
		// })
		// .catch(err => {
		//   console.log(err)
		// });
	};

	render() {
		return (
			<div className="profile">
				<div className="profile-center-container">
					<div className="profile-center">
						<h2 className="profile-name">Username:</h2>
						<p className="username">{this.state.username}</p>
						Please enter your current password and any other field you would like to change.
						<Form onSubmit={(e) => this.handleSubmit(e)}>
							<Form.Field onChange={(e) => this.handleChange(e.target.value)}>
								<label className="profile-label">New Name:</label>
								<input className="input" placeholder={this.props.name} />
							</Form.Field>
							<Form.Field>
								<label className="profile-label">Current Password:</label>
								<input placeholder="Current Password" type="password" onChange={this.handleChange} />
							</Form.Field>
							<Form.Field>
								<label className="profile-label">New Password:</label>
								<input placeholder="New Password" type="password" onChange={this.handleChange} />
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
		username: state.manageLogin.username
	};
};

const dToP = (dispatch) => ({
	login: (data) => dispatch({ type: 'LOGIN', name: data.name, username: data.username })
});

export default LoggedInHOC(connect(sToP, dToP)(Profile));
