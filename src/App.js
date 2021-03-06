import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Menu, Sidebar, Popup } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { connect } from 'react-redux';

import ModalContainer from './components_sidebar/SignInModal';
import Routes from './routes';

const url = 'https://cors-anywhere.herokuapp.com/https://sentiment-tweet-api.herokuapp.com/';

class App extends React.Component {
	state = {
		activeItem: ''
	};

	isloggedIn = () => {
		if (localStorage.st_token) {
			const data = {
					username: localStorage.st_username,
					name: localStorage.st_name,
					id: localStorage.st_id
			};
			this.props.login(data);
		} 
	};
	componentDidMount(){
		this.isloggedIn();
	}
	showModal = () => {
		this.props.toggleModal();
	};

	signOut = () => {
		localStorage.clear();
		window.location.reload();
		this.props.logOut();
	};

	activateMenu = (menu) => {
		this.props.closeSidebar();
		this.props.clearCelebSelection();
		this.setState({
			activeItem: menu
		});
	};

	signed = () => {
		const { activeItem } = this.state;
		return (
			<React.Fragment>
				<Menu.Item
					name="home"
					active={activeItem === 'home'}
					onClick={() => this.activateMenu('home')}
					as={Link}
					to="/"
				>
					<Icon name="home" />
					Home
				</Menu.Item>
				{/* <Menu.Item
					name="favorites"
					active={activeItem === 'favorites'}
					onClick={() => this.activateMenu('favorites')}
					as={Link}
					to="/favorites"
				>
					<Icon name="heart outline" />
					Favorites
				</Menu.Item> */}
				<Menu.Item
					name="statistics"
					active={activeItem === 'statistics'}
					onClick={() => this.activateMenu('statistics')}
					as={Link}
					to="/statistics"
				>
					<Icon name="chart area" />
					Positivities
				</Menu.Item>
				<Menu.Item
					name="profile"
					active={activeItem === 'profile'}
					onClick={() => this.activateMenu('profile')}
					as={Link}
					to="/profile"
				>
					<Icon name="user outline" />
					Profile
				</Menu.Item>
				<Menu.Item onClick={() => this.signOut()}>
					<Icon name="sign out" />
					Sign-out
				</Menu.Item>
			</React.Fragment>
		);
	};

	getAllCelebs = async () => {
		await fetch(url + '/celebs')
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
				this.props.addAllCelebs(data);
			})
			.then(() => {
				this.props.allCelebsLoading();
			})
			.catch((err) => console.log(err));
	};

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
						onHide={this.props.toggle}
						vertical
						visible={this.props.open}
						width="thin"
					>
						{this.props.isLoggedin ? (
							this.signed()
						) : (
							<React.Fragment>
								<Menu.Item name="home" as={Link} to="/">
									<Icon name="home" />
									Home
								</Menu.Item>
								<Popup
									hoverable
									on="hover"
									position="top left"
									trigger={
										<Menu.Item as={Link} to="/statistics">
											<Icon name="chart area" />
											Positivities
										</Menu.Item>
									}
									content="Available after sign in"
									inverted
									style={{
										boderRadius: 5,
										opacity: 0.7,
										padding: '2em',
										marginTop: '50px',
										left: '2em'
									}}
								/>
								<Menu.Item name="sign in" onClick={this.props.toggleModal}>
									<Icon name="sign in" />
									Sign In
								</Menu.Item>
							</React.Fragment>
						)}
					</Sidebar>
					<ModalContainer />
					<Sidebar.Pusher dimmed={this.props.open}>
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
		selectedCeleb: state.manageCelebs.celeb,
		open: state.manageNavBar.open,
		modal: state.manageNavBar.modal,
		isLoggedin: state.manageLogin.login
	};
};

const dToP = (dispatch) => ({
	toggle: () => dispatch({ type: 'TOGGLE_SIDEBAR' }),
	toggleModal: () => dispatch({ type: 'TOGGLE_MODAL' }),
	addAllCelebs: (data) => dispatch({ type: 'ADD_CELEBS', payload: data }),
	allCelebsLoading: () => dispatch({ type: 'DONE', payload: false }),
	selectCeleb: (data) => dispatch({ type: 'SELECT_CELEB', payload: data }),
	logOut: () => dispatch({ type: 'LOGOUT' }),
	clearCelebSelection: () => dispatch({ type: 'CLEAR_CELEB' }),
	closeSidebar: () => dispatch({ type: 'CLOSE_SIDEBAR' }),
	login: (payload) => dispatch({ type: 'LOGIN', payload }),
});

export default connect(sToP, dToP)(App);
