
export default function manageNavBar(
	state = {
        login: false,
        user: null
	},
	action
) {
	switch (action.type) {
		case 'LOGIN':
            return {...state,
                login: true,
                user: action.payload
			};
		case 'LOGGED_OUT_MENU':
			return {...state,
                login: false,
                user: null
			};

		default:
			return state;
	}
}
