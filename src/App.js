import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


import ModalContainer from './components_sidebar/ModalContainer';

import Routes from './routes';

import { connect } from 'react-redux';


const url = 'http://localhost:3000'

class App extends React.Component {
	showModal = () => {
		this.setState({
			show: !this.state.show
		});
	};

	getLoggedIn = (json) => {
		fetch('http://localhost:3000/', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.token}`
			}
		})
			.then((response) => response.json())
			.then((data) => {
				// manageLogin reducer => login
			});

	};

	logOut = () => {
		localStorage.removeItem('token');
		// this.setState((prevState) => {
		// 	return {
		// 		logged_in: false,
		// 		user: null
		// 	};
		// });

		//reducer => manageLogin
	};

  toggleNav = () => {
		this.setState({
			navBarShow: !this.state.navBarShow
		});
  }

	signed = () => {
		return (
			<React.Fragment>
				<Menu.Item as={Link} to="/">
					<Icon name="home" />
					Home
				</Menu.Item>
				<Menu.Item as={Link} to="/favorites">
					<Icon name="heart outline" />
					Favorites
				</Menu.Item>
				<Menu.Item as={Link} to="/statistics">
					<Icon name="chart area" />
					Positivities
				</Menu.Item>
				<Menu.Item as={Link} to="/profile">
					<Icon name="user outline" />
					Profile
				</Menu.Item>
				<Menu.Item onClick={() => this.logOut()}>
					<Icon name="sign out" />
					Sign-out
				</Menu.Item>
			</React.Fragment>
		);
	};

	getAllCelebs = async () => {
		await fetch(url + '/celebs')
		.then(resp => resp.json())
		.then(data => {
		  console.log(data);
		  this.props.addAllCelebs(data);
		})
		.then(() => {
		  this.props.allCelebsLoading();
		})
	   } 

	componentDidMount() {
		this.getAllCelebs();
	}


	render() {
		return (
			<Router>
				<Sidebar.Pushable>
					<Sidebar
						as={Menu}
						animation="overlay"
						icon="labeled"
						inverted
						onHide={this.toggleNav}
						vertical
						visible={this.state.navBarShow}
						width="thin"
					>
						{this.state.logged_in ? (
							this.signed()
						) : (
							<Menu.Item
								onClick={this.showModal}
								// {() => this.onSignIn()}
							>
								<Icon name="sign in" />
								Sign-in
							</Menu.Item>
						)}
					</Sidebar>

					{this.state.show ? (
						<ModalContainer
							logged_in={this.state.logged_in}
							user={this.state.user}
							getLoggedIn={this.getLoggedIn}
							showModal={this.showModal}
							generateAllTweets={this.generateAllTweets}
							searchTwitter={this.searchTwitter}
						/>
					) : null}

					<Sidebar.Pusher dimmed={this.state.navBarShow}>
						<React.Fragment>
								<Routes />
						</React.Fragment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Router>
		);
	}
}

const sToP = (state) => {
	return {
	allCelebs: state.manageCelebs.allCelebs,
    allCelebsLoading: state.manageLoading.allCelebsLoading,
    selectedCeleb: state.manageCelebs.celeb
	};
};

const dToP = (dispatch) => ({
  addAllCelebs: (data) => dispatch({ type: 'ADD_CELEBS', payload: data }),
  allCelebsLoading: () => dispatch({ type: 'DONE', payload:false}),
  selectCeleb: (data) => dispatch({ type: 'SELECT_CELEB', payload: data})
});

export default connect(sToP, dToP)(App);