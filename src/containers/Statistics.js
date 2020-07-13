import React, {useState} from "react";
import '../assets/stylesheets/Statistics.css';

import img from '../assets/stats2.jpg';
import NavBarOpener from "../components_sidebar/NavBarOpener";
import LoggedInHOC from "../HOC/LoggedInHOC";
import Stream from "../components/Stream";
import DropDown from "../components/Dropdown";

import {connect} from "react-redux";

const Statistics = props => {
    const url = 'http://localhost:3000';

    const [ tweets, setTweets ] = useState([ {}, {}, {}, {}, {}, {}, {}, {}, {} ]);
    const [ loading, setLoading ] = useState(false);
    // const labels = props.tweets.map( tweet => {
    //     return tweet.date})

    // const data = props.tweets.map( tweet => {
    //     return tweet.sentiment2}).slice(0,8)

	const handleChange = (e, item) => {
        console.log('in handlechange')
		const id = item.value;
		props.selectCeleb(id);
		setLoading(true);
		fetchSelect(id);
	};

	const fetchSelect = async (payload) => {
        console.log('in fetch', payload)
		fetch(url + `/celebs/${payload}`)
			.then((resp) => resp.json())
			.then((data) => {
				setLoading(false);
				props.addTweets(data);
				setTweets(data);
			})
			.catch((err) => console.log(err));
	};
    return (
        <div style={{  
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}
        className="stats">
            {loading? <p style={{position: "absolute", top: "50%", left: "45%"}}>loading</p> : null}
            <DropDown handleChange={handleChange}/>
            {/* <Stream labels={labels} data={data} acc={props.selectedAcc}/> */}
        </div>
    )
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
	addTweets: (data) => dispatch({type: 'ADD_TWEETS', payload: data})
});

export default LoggedInHOC(connect(sToP, dToP)(Statistics));


