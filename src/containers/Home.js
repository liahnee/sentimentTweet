import React from 'react';
import '../assets/stylesheets/Home.css';

import { Grid, Image } from 'semantic-ui-react';
import bcard from '../assets/bcard.jpg';
import CardFlip from "../components_searchHome/CardFlip";
import { connect } from 'react-redux';

import { Dropdown } from 'semantic-ui-react';

const Home = props => {

    // const allCards = props.tweets.map( tweet => {
    //     console.log('searchHOme')
    //     return <CardFlip tweet={tweet}/>
    // })

    // const check = (num) => {
    //     return allCards[num]? allCards[num] : <Image src={bcard} />
    // }
    const options = () => {
		const optionsArr = props.allCelebs.map((obj, i) => {
			const { name, twitter_id, id } = obj;
			return {key: twitter_id + i, value: id, text: name}
		})
		console.log("optionsArr", optionsArr);
		return optionsArr
    }
    
	const handleChange = (e, item) => {
		const id = item.value;
		console.log(id)
		props.selectCeleb(id);
	}

    return (
        <div className='home'>
            
            <Dropdown options={options()} onChange={handleChange} />
            
        </div>
    )
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
    selectCeleb: (data) => dispatch({ type: 'SELECT_CELEB', payload: data})
});

export default connect(sToP, dToP)(Home);
