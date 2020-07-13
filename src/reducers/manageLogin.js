
export default function manageNavBar(
	state = {
        login: true,
		username: 'example',
		name: 'example'
	},
	action
) {
	switch (action.type) {
		case 'LOGIN':
            return {...state,
				login: true,
				name: action.name,
                username: action.username
			};
		case 'LOGOUT':
			return {...state,
                login: false,
				name: null,
                username: null
			};

		default:
			return state;
	}
}
