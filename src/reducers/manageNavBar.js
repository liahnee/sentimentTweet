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
        open: false,
        menu: loggedOut
	},
	action
) {
	switch (action.type) {
        case 'TOGGLE':
            return {...state,
                open: !state.open
            };

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
