// no empty cards. render cards only if prop.tweets are available.

import React, { useState, useEffect } from 'react';
import '../assets/stylesheets/Home.css';

// import { Grid, Image } from 'semantic-ui-react';
import CardFlip from '../components_searchHome/CardFlip';
import { connect } from 'react-redux';

import FullDropdown from '../components/Dropdown';

const url = 'http://localhost:3000';

const Home = (props) => {
	const [ tweets, setTweets ] = useState([ {}, {}, {}, {}, {}, {}, {}, {}, {} ]);
	const [ loading, setLoading ] = useState(false);
	// useEffect(() => {}, tweets);

	const handleChange = (e, item) => {
		const id = item.value;
		props.selectCeleb(id);
		setLoading(true);
		fetchSelect(id);
	};

	const fetchSelect = async (payload) => {
		fetch(url + `/celebs/${payload}`)
			.then((resp) => resp.json())
			.then((data) => {
				if (data.status === 500) {
					console.log("erorr 500", data)
					return;
				}
				setLoading(false);
				props.addTweets(data);
				setTweets(data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="home">
			{loading ? (
				<div className="loading">
					<p className="loading-text">Loading...this may take a couple of minutes</p>
				</div>
			) : (
				<div id="cards-grid-container">
					<div id="cards-grid">
						{tweets[0].tweet ? (
							tweets.map((tweet) => {
								return <CardFlip tweet={tweet} />;
							})
						) : null}
					</div>
				</div>
			)}
			<FullDropdown handleChange={handleChange} />
		</div>
	);
};

const sToP = (state) => {
	return {
		allCelebs: state.manageCelebs.allCelebs,
		allCelebsLoading: state.manageLoading.allCelebsLoading,
		selectedCeleb: state.manageCelebs.celeb,
		tweets: state.manageCelebs.celebTweets
	};
};

const dToP = (dispatch) => ({
	addAllCelebs: (data) => dispatch({ type: 'ADD_CELEBS', payload: data }),
	selectCeleb: (data) => dispatch({ type: 'SELECT_CELEB', payload: data }),
	addTweets: (data) => dispatch({ type: 'ADD_TWEETS', payload: data })
});

export default connect(sToP, dToP)(Home);
