import React, { Component } from 'react';
import { Modal, Form, Header, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import ShouldRender from '../HOC/ShouldRender';

import { connect } from 'react-redux';

class ModalContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fields: {
				username: '',
				password: '',
				newName: '',
				newUsername: '',
				newPassword: '',
        success: false,
      },
      signedUp: true,
		};
	}
	handleChange = (e) => {
		let fieldName = e.target.id;
		this.setState({
			fields: { ...this.state.fields, [fieldName]: e.target.value }
		});
		// ,() => this.props.showModal;
	};
	handleSignUp = (e) => {
		// e.preventDefault();
		// console.log("reached handle sign up");
		// console.log("password:", this.state.fields.newPassword);
		// fetch("http://localhost:3000/users", {
		//   method: "POST",
		//   headers: {
		//     "Content-Type": "application/json",
		//     Accept: "application/json"
		//   },
		//   body: JSON.stringify({ user: {
		//     name: this.state.fields.newName,
		//     username: this.state.fields.newUsername,
		//     password: this.state.fields.newPassword
		//     // MAKE SURE THE ABOVE IS password:
		//   }
		//   })
		// })
		//   .then(response => response.json())
		//   .then(data => {
		//     console.log("after sign up form", data);
		// this.setState(prevState => {
		//   return { signedUp: true };
		// });
		// });
	};

	onSignIn = () => {
		// fetch("http://localhost:3000/login", {
		//   method: "POST",
		//   headers: {
		//     "Content-Type": "application/json",
		//     Accepts: "application/json"
		//   },
		//   body: JSON.stringify({ auth :{
		//     username: this.state.fields.username,
		//     password: this.state.fields.password
		//   }
		//   })
		// })
		//   .then(response => response.json())
		//   .then(json => {
		//     //do something to update App state to deal with the logged_in status
		//     if (json.jwt) {
		//       localStorage.setItem("token", json.jwt);
		//       this.props.getLoggedIn(json);
		//     }
		//   })
		//   .then(() => {
		//     this.props.generateAllTweets();
		//   })
		//   .then(() => {
		//     this.props.searchTwitter();
		//   });
  };

	render() {
		return (
      <Modal open={this.props.modal} closeIcon size="tiny" onClose={this.props.toggleModal}>
				{this.state.signedUp ? (
					<React.Fragment>
						<Header content="Sign In" as="h2" />
						<Modal.Content>
							<Form.Input
								label="Username "
								required
								type="text"
								placeholder="Username"
								id="username"
								onChange={this.handleChange}
							/>
							<Form.Input
								label="Password "
								required
								type="password"
								placeholder="Password"
								id="password"
								onChange={this.handleChange}
							/>
						</Modal.Content>
						<Modal.Actions>
            <Button
                content="Sign Up"
                onClick={() => this.setState({signedUp: false})}

              />
							<Button
								color="green"
								content="Sign In"
								onClick={ this.onSignIn	}
							/>
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
								placeholder="User"
								name="newName"
								id="newName"
								// value={this.state.newUser.newName}
								onChange={this.handleChange}
							/>
							<Form.Input
								label=" New username "
								required
								type="text"
								placeholder="Username"
								name="newUsername"
								id="newUsername"
								// value={this.state.newUser.newUsername}
								onChange={this.handleChange}
							/>
							<Form.Input
								label=" New password "
								required
								type="password"
								placeholder="Password"
								name="newPassword"
								id="newPassword"
								// value={this.state.newUser.newPassword}
								onChange={this.handleChange}
							/>
						</Modal.Content>
						<Modal.Actions>
            <Button
                content="Sign In"
                onClick={() => this.setState({signedUp: true})}

              />
							<Button
								onClick={this.handleSignUp}
								color="green"
								icon="pencil"
								content="Sign Up!"
							/>
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
	toggleModal: () => dispatch({ type: 'TOGGLE_MODAL' })
});

export default connect(sToP, dToP)(ModalContainer);
