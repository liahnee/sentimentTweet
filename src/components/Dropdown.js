import React from 'react';

import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

const FullDropdown = (props) => {
	const options = () => {
		// if (!props.allCelebs && props.allCelebs.type !== Array ) {
		//     return null
		// }
		const optionsArr = props.allCelebs.map((obj, i) => {
			const { name, twitter_id, id } = obj;
			return { key: `${twitter_id}_${i}`, value: id, text: name };
		});
		// console.log("optionsArr", optionsArr);
		return optionsArr;
	};

	return (
		<div className="home-dropdown">
			<Dropdown fluid search selection options={options()} onChange={props.handleChange} />
		</div>
	);
};

const sToP = (state) => ({
	allCelebs: state.manageCelebs.allCelebs,
	allCelebsLoading: state.manageLoading.allCelebsLoading,
	selectedCeleb: state.manageCelebs.celeb
});

const dToP = (dispatch) => ({
	addAllCelebs: (data) => dispatch({ type: 'ADD_CELEBS', payload: data }),
	selectCeleb: (data) => dispatch({ type: 'SELECT_CELEB', payload: data }),
	addTweets: (data) => dispatch({ type: 'ADD_TWEETS', payload: data })
});

export default connect(sToP, dToP)(FullDropdown);
