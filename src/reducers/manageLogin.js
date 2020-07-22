
export default function manageNavBar(
	state = {
        login: false,
		username: 'example',
		name: 'example'
	},
	action
) {
	switch (action.type) {
		case 'LOGIN':
            return {...state,
				login: true,
				name: action.payload.name,
				username: action.payload.username,
				id: action.payload.id
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
