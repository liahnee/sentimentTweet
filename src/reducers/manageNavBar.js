const loggedIn = [{
    route: '',
    icon: '',
    name: 'Favorites',
},{
    route: '',
    icon: '',
    name: 'Statistic',
},{
    route: '',
    icon: '',
    name: 'Profile',
}]

const loggedOut = [{
    icon: '',
    name: 'Profile',
}]


export default function manageNavBar(
	state = {
        menu: loggedOut
	},
	action
) {
	switch (action.type) {
		case 'LOGGED_IN_MENU':
			return {...state,
                menu: loggedIn
			};
		case 'LOGGED_OUT_MENU':
			return {...state,
				menu: loggedOut
			};

		default:
			return state;
	}
}
