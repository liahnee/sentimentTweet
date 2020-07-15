import React, { Component } from 'react';
import { Modal, Form, Header, Button, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ModalContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fields: {
				username: '',
				password: '',
				name: '',
				success: false
			},
			error: false,
			errorMsg: '',
			signedUp: true
		};
	}
	handleChange = (e) => {
		let fieldName = e.target.id;
		this.setState({
			fields: { ...this.state.fields, [fieldName]: e.target.value }
		});
	};
	handleSignUp = (e) => {
		e.preventDefault();
		const { name, username, password } = this.state.fields;

		fetch('http://localhost:3000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({ user: { name, username, password } })
		})
			.then((response) => response.json())
			.then((data) => {
				if (!data.username) {
					console.log('error caught in then:data ');
					this.setState({
						error: true,
						errorMsg: 'Failed:' + data.message
					});
				} else {
					this.props.login(data.username);
				}
				console.log('data', data.message);
			})
			.catch((err) => {
				console.log('error caught in catch', err);
				this.setState({
					error: true,
					errorMsg: 'Failed:' + err.message
				});
			})
			// .then(() => {
			// 	this.props.generateAllTweets();
			// })
			// .then(() => {
			// 	this.props.searchTwitter();
			// })
			// .catch((err) => {
			// 	//if login fails, catch the rest fetch
			// 	console.log(err);
			// })
	};

	handleSignIn = (e) => {
		e.preventDefault();
		fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accepts: 'application/json'
			},
			body: JSON.stringify({
				auth: {
					username: this.state.fields.username,
					password: this.state.fields.password
				}
			})
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('data', data);
				if (!data.user.username) {
					console.log('error caught in then:data ');
					this.setState({
						error: true,
						errorMsg: 'Failed:' + data.message
					});
				} else {
					this.props.login(data.user.username);
					this.closeModal();
					return <Redirect to ='/home' />
				}
				
			})
			.catch((err) => {
				console.log('error caught in catch', err);
				this.setState({
					error: true,
					errorMsg: 'Failed:' + err.message
				});
			})
			// .then(() => {
			// 	this.props.generateAllTweets();
			// })
			// .then(() => {
			// 	this.props.searchTwitter();
			// })
			// .catch((err) => {
			// 	//if login fails, catch the rest fetch
			// 	console.log(err);
			// })

	};

	clearFields = () => {
		this.setState({
			fields: {
				username: '',
				password: '',
				name: ''
			}
		});
	};

	toggleInUp = () => {
		this.clearError();
		this.setState({
			signedUp: !this.state.signedUp
		});
		this.clearFields();
	};

	closeModal = () => {
		this.clearError();
		this.props.toggleModal();
		this.clearFields();
	};

	clearError = () => {
		this.setState({
			error: false
		});
	};

	render() {
		return (
			<Modal className="signin-modal" as="form" open={this.props.modal} closeIcon size="tiny" onClose={this.closeModal}>
				{this.state.signedUp ? (
					<React.Fragment>
						<Header content="Sign In" as="h2" />
						<Modal.Content>
							<Form.Input
								label="Username"
								required
								type="text"
								placeholder="Username"
								id="username"
								value={this.state.fields.username}
								onChange={this.handleChange}
							/>
							<Form.Input
								label="Password "
								required
								type="password"
								placeholder="Password"
								id="password"
								value={this.state.fields.password}
								onChange={this.handleChange}
							/>
							{this.state.error ? (
								<Message
									error={this.state.error}
									header="Action Forbidden"
									content={this.state.errorMsg}
								/>
							) : null}
						</Modal.Content>
						<Modal.Actions>
							<span className="span-button" onClick={this.toggleInUp}> Sign Up </span>
							<Button color="green" icon="pencil" content="Sign In" onClick={this.handleSignIn} />
						</Modal.Actions>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Header content="Join us!" as="h2" />
						<Modal.Content>
							<Form.Input
								label="Your Name"
								required
								type="text"
								placeholder="Your Name"
								name="name"
								id="name"
								value={this.state.fields.name}
								onChange={this.handleChange}
							/>
							<Form.Input
								label="Username "
								required
								type="text"
								placeholder="Username"
								id="username"
								value={this.state.fields.username}
								onChange={this.handleChange}
							/>
							<Form.Input
								label="Password "
								required
								type="password"
								placeholder="Password"
								id="password"
								value={this.state.fields.password}
								onChange={this.handleChange}
							/>
							{this.state.error ? (
								<Message
									error={this.state.error}
									header="Action Forbidden"
									content={this.state.errorMsg}
								/>
							) : null}
						</Modal.Content>
						<Modal.Actions>
							<span className="span-button" onClick={this.toggleInUp}> Sign In</span>
							<Button onClick={this.handleSignUp} color="green" icon="pencil" content="Sign Up!" />
						</Modal.Actions>
					</React.Fragment>
				)}
			</Modal>
		);
	}
}

const sToP = (state) => {
	return {
		modal: state.manageNavBar.modal
	};
};

const dToP = (dispatch) => ({
	toggleModal: () => dispatch({ type: 'TOGGLE_MODAL' }),
	login: (username) => dispatch({ type: 'LOGIN', payload: username }),
});

export default connect(sToP, dToP)(ModalContainer);
