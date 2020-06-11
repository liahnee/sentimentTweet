
const url = 'http://localhost:3000';

export default function manageCelebs(
	state = {
        celeb: {}, //exists to separate managePatient.state.in_view to just for cc later
        celebTweets: [],
		allCelebs: []
	},
	action
) {
	switch (action.type) {
		case 'SELECT_CELEB':
            let tweets = [];
            fetch(url + (`/celebs/${action.payload}`))
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                tweets = data;
            })
			return {...state,
                celeb: action.payload,
                celebTweets: tweets
			};
		case 'ADD_CELEBS':
            console.log("hits here")
			return {...state,
				allCelebs: action.payload
			};

		default:
			return state;
	}
}
