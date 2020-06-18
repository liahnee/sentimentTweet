import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import bcard from '../assets/bcard.jpg';
import CardFlip from "../components_searchHome/CardFlip";
import AccSelected from "../HOC/AccSelected";
import { connect } from 'react-redux';

const Home = props => {

    // const allCards = props.tweets.map( tweet => {
    //     console.log('searchHOme')
    //     return <CardFlip tweet={tweet}/>
    // })

    // const check = (num) => {
    //     return allCards[num]? allCards[num] : <Image src={bcard} />
    // }
    options = () => {
		const optionsArr = this.props.allCelebs.map((obj, i) => {
			const { name, twitter_id, id } = obj;
			return {key: twitter_id + i, value: id, text: name}
		})
		console.log("optionsArr", optionsArr);
		return optionsArr
    }
    
	handleChange = (e, item) => {
		const id = item.value;
		console.log(id)
		this.props.selectCeleb(id);
	}

    return (
        <div className='home'>
            
            <DropDown options={options()} handleCelebSelection={handleChange} />
            
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

export default AccSelected(connect(sToP, dToP)(SearchHome));
