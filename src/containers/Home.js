// no empty cards. render cards only if prop.tweets are available. 

import React, { useState, useEffect } from 'react';
import '../assets/stylesheets/Home.css';

// import { Grid, Image } from 'semantic-ui-react';
import CardFlip from '../components_searchHome/CardFlip';
import { connect } from 'react-redux';

import FullDropdown from '../components/Dropdown';


const url = 'http://localhost:3000';

const Home = (props) => {

    const [tweets, setTweets] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);
	// const allCards = props.tweets.map( tweet => {
	//     console.log('searchHOme')
	//     return <CardFlip tweet={tweet}/>
	// })

	// const check = (num) => {
	//     return allCards[num]? allCards[num] : <Image src={bcard} />
    // }
    
    const [ loading, setLoading] = useState(false);
	useEffect(()=>{}, tweets)

	const handleChange = (e, item) => {
		const id = item.value;
		// console.log(id)
		props.selectCeleb(id);
		setLoading(true);
		fetchSelect(id);
	};

	const fetchSelect = async (payload) => {
		fetch(url + `/celebs/${payload}`)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
				setLoading(false);
                props.addTweets(data)
                setTweets(data);
            })
            .catch(err => console.log(err))
	};

	return (
		<div className="home">
			<div id="cards-grid-container">
			{tweets[0].tweet ? tweets.map(tweet => { return <CardFlip tweet={tweet} /> }) : null}
            </div>
            {loading ? <div style={{color:"white", fontSize:"3rem", position: "absolute", margin: "0 auto 0 auto", top: "0", bottom: "0", left: "0", right: "0", zIndex: "5"}}>Loading... </div> : null}
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

const tweetsDispatch = (data, dispatch) => new Promise((resolve, reject) => {
    // do anything here
    dispatch({ type: 'ADD_TWEETS', payload: data });
    resolve();
  });

const dToP = (dispatch) => ({
	addAllCelebs: (data) => dispatch({ type: 'ADD_CELEBS', payload: data }),
    selectCeleb: (data) => dispatch({ type: 'SELECT_CELEB', payload: data }),
    addTweets: data => tweetsDispatch(data, dispatch)
    // new Promise((resolve, reject) => {
    //     dispatch({
    //       type: 'ADD_TWEETS',
    //       payload: data 
    //     });
    //     resolve()
    // }),
    // (data) => dispatch({ type: , })
});

export default connect(sToP, dToP)(Home);
