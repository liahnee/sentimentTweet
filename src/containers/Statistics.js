import React, { useState } from 'react';
import '../assets/stylesheets/Statistics.css';

import img from '../assets/stats.jpg';
import LoggedInHOC from '../HOC/LoggedInHOC';
import Stream from '../components/Stream';
import DropDown from '../components/Dropdown';

import { connect } from 'react-redux';

const Statistics = (props) => {
	const url = 'http://localhost:3000';

	const [ tweets, setTweets ] = useState([ {}, {}, {}, {}, {}, {}, {}, {}, {} ]);
	const [ loading, setLoading ] = useState(false);

	const handleChange = (e, item) => {
		const id = item.value;
		props.selectCeleb(id);
		setLoading(true);
		fetchSelect(id);
	};

	const fetchSelect = async (payload) => {
		console.log('in fetch', payload);
		fetch(url + `/celebs/${payload}`)
			.then((resp) => resp.json())
			.then((data) => {
				setTweets(data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div
			style={{
				backgroundImage: `url(${img})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat'
			}}
			className="stats"
		>
			{loading ? (
				<div className="loading"><p className="loading-text">Loading...this may take up to a minute</p></div>
			) : (
				<Stream tweets={tweets} acc={props.selectedCeleb} />
			)}
			<DropDown handleChange={handleChange} />
		</div>
	);
};

const sToP = (state) => {
	return {
		allCelebs: state.manageCelebs.allCelebs,
		selectedCeleb: state.manageCelebs.celeb,
		tweets: state.manageCelebs.celebTweets
	};
};

const dToP = (dispatch) => ({
	selectCeleb: (data) => dispatch({ type: 'SELECT_CELEB', payload: data }),
	addTweets: (data) => dispatch({ type: 'ADD_TWEETS', payload: data })
});

export default LoggedInHOC(connect(sToP, dToP)(Statistics));
