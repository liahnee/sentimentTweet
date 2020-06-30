

export default function manageCelebs(
	state = {
        celeb: {}, //exists to separate managePatient.state.in_view to just for cc later
        celebTweets: [],
		allCelebs: [{name: "Loading"}, {twitter_id: null}, {id: null}]
	},
	action
) {
	switch (action.type){
		case 'SELECT_CELEB':
			// let tweets = fetchSelect(action.payload);
			// console.log("tweets", tweets)
			return {...state,
				celeb: action.payload
				// celebTweets: tweets
			};

		case 'ADD_TWEETS':
			console.log("tweets", action.payload)
			return {...state,
				celebTweets: action.payload
			}
		case 'CLEAR_CELEB':
			return {...state,
                celeb: {},
                celebTweets: []
			};
		case 'ADD_CELEBS':
            console.log("hits here")
			return {...state,
				allCelebs: action.payload
			};

		default:
			return state;
	}


};
