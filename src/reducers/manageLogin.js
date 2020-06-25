
export default function manageNavBar(
	state = {
        login: false,
        username: null
	},
	action
) {
	switch (action.type) {
		case 'LOGIN':
            return {...state,
                login: true,
                username: action.payload
			};
		case 'LOGGED_OUT_MENU':
			return {...state,
                login: false,
                username: null
			};

		default:
			return state;
	}
}
