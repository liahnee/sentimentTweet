import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import bcard from '../assets/bcard.jpg';
import CardFlip from "../components_searchHome/CardFlip";
import AccSelected from "../HOC/AccSelected";
import { connect } from 'react-redux';

const SearchHome = props => {

    const allCards = props.tweets.map( tweet => {
        console.log('searchHOme')
        return <CardFlip tweet={tweet}/>
    })

    const check = (num) => {
        return allCards[num]? allCards[num] : <Image src={bcard} />
    }

    return (
        <div className='tweetcards'>
            <React.Fragment>
                <Grid className="flip-card">
                    <Grid.Row columns={3} >
                    <Grid.Column>
                        {check(0)} 
                    </Grid.Column>
                    <Grid.Column>
                        {check(1)}
                    </Grid.Column>
                    <Grid.Column>
                        {check(2)}
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3}>
                    <Grid.Column>
                        {check(3)}
                    </Grid.Column>
                    <Grid.Column>
                        {check(4)}
                    </Grid.Column>
                    <Grid.Column>
                        {check(5)}
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3} >
                    <Grid.Column>
                        {check(6)}
                    </Grid.Column>
                    <Grid.Column>
                        
                    </Grid.Column>
                    <Grid.Column>
                        {check(7)}
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
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
