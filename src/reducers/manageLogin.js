
export default function manageNavBar(
	state = {
        loggedIn: false,
        user: null
	},
	action
) {
	switch (action.type) {
		case 'LOGIN':
            return {...state,
                loggedIn: true,
                user: action.payload
			};
		case 'LOGGED_OUT_MENU':
			return {...state,
                loggedIn: false,
                user: null
			};

		default:
			return state;
	}
}
