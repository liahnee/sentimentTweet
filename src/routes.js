
import React from 'react';

import { Route } from 'react-router-dom';

import NavBarOpener from './components_sidebar/NavBarOpener';

// import Favorites from './containers/Favorites';
// import Profile from './containers/Profile';
// import Statistics from './containers/Statistics';

import Home from './containers/Home';





const Routes = () => {
    return (
        <React.Fragment>
            <NavBarOpener />
            <Route exact path="/">
                <Home />
            </Route>

            {/* <Route exact path="/favorites">
                <Favorites
                    top10={this.state.top10}
                    loggedin={this.state.logged_in}
                    favs={this.state.favorites}
                    user={this.state.user}
                    deleteFav={this.deleteFav}
                    toggleNav={this.toggleNav}
                    addToFavorites={this.addToFavorites}
                />
            </Route>

            <Route exact path="/profile">
                <Profile
                    loggedin={this.state.logged_in}
                    user={this.state.user}
                    updateUser={this.updateUser}
                    toggleNav={this.toggleNav}
                />
            </Route>

            <Route exact path="/statistics">
                <Statistics
                    top10={this.state.top10}
                    loggedin={this.state.logged_in}
                    toggleNav={this.toggleNav}
                    tweets={this.state.tweets}
                    selectedAcc={this.state.selectedAcc}
                    top10={this.state.top10}
                    searchTwitter={this.searchTwitter}
                    updateSelectedAcc={this.updateSelectedAcc}
                />
            </Route> */}
        </React.Fragment>
    )
}

export default (Routes);