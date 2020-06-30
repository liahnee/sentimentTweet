
import React from 'react';

import { Route } from 'react-router-dom';

import NavBarOpener from './components_sidebar/NavBarOpener';

import Favorites from './containers/Favorites';
import Profile from './containers/Profile';
import Statistics from './containers/Statistics';

import Home from './containers/Home';

const Routes = () => {
    return (
        <React.Fragment>
            <NavBarOpener />
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/favorites">
                <Favorites />
            </Route>

            <Route exact path="/profile">
                <Profile />
            </Route>

            <Route exact path="/statistics">
                <Statistics />
            </Route>
        </React.Fragment>
    )
}

export default (Routes);