import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import FavBar from "./components_searchHome/FavBar";
import NavBarOpener from "./components_sidebar/NavBarOpener";
import DropDown from "./components_searchHome/DropDown";

import Favorites from "./containers/Favorites";
import Profile from "./containers/Profile";
import Statistics from "./containers/Statistics";

import ModalContainer from "./components_sidebar/ModalContainer";
import SearchHome from "./containers/SearchHome";
import twitteraccounts from "./components_favorites/TwitterAccts";
import Entered from "./HOC/Entered";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entered: false,
      tweets: [],
      show: false,
      logged_in: false,
      user: {
        // username: "CookieMonster",
        // name: "Oreo the Cookie",
        // password: "test",
        // id: 1
      },
      favorites: [
        // {
        //   name: "Lady Gaga",
        //   twitter_account_id: "@BarackObama"
        // },
        // {
        //   name: "Katy Perry",
        //   twitter_account_id: "@katyperry"
        // },
        // {
        //   name: "Tom Holland",
        //   twitter_account_id: "@justinbieber"
        // }
      ], 
      tweets: [
        // {
        //   content: "Fame is prison",
        //   celeb_username: "ladygaga",
        //   // sentiment1(DeepAI): Neutral,
        //   sentiment2: "Positive"
        //   // sentiment3(MicroSoft): Positive 95%
        // },
        // {
        //   content: "Thank you @AMAs goo.gle/AMAsVote",
        //   celeb_username: "ladygaga",
        //   // sentiment1(DeepAI): Negative,
        //   sentiment2: "Neutral"
        //   // sentiment3(Microsoft): Positive 90%
        // },
        // {
        //   content:
        //     "David Beckham and me for #TudorWatch. Full video out 10/30 #BornToDare",
        //   celeb_username: "ladygaga",
        //   // sentiment1(DeepAI): Neutral(2),
        //   sentiment2: "Positive"
        //   // sentiment3(Microsoft): Neutral 50%
        // },
        // {
        //   content:
        //     "Thank you @NYAMNYC for honoring @BTWFoundation with your Bold and Brave award for our work in supporting the mental and emotional wellness of young people. @momgerm",
        //   celeb_username: "ladygaga",
        //   // sentiment1(DeepAI): Positive, Neutral,
        //   sentiment2: "Positive"
        //   // sentiment3(Microsoft): Positive 97%
        // },
        // {
        //   content: "Jazz & Piano at @ParkTheaterLV tonight #GagaVegas",
        //   celeb_username: "ladygaga",
        //   // sentiment1(DeepAI): Neutral,
        //   sentiment2: "Positive"
        //   // sentiment3(Microsoft): Neutral 50%
        // },
        // {
        //   content: "Lokah Samstah Sukhino Bhavantu",
        //   celeb_username: "ladygaga",
        //   // sentiment1(DeepAI): Neutral,
        //   sentiment2: "Positive"
        //   // sentiment3(Microsoft): Neutral 50%
        // },
        // {
        //   content:
        //     "When they have to X-Ray almost your entire body…Just Dance. Gonna be ok.",
        //   celeb_username: "ladygaga",
        //   // sentiment1(DeepAI): Neutral, Negative,
        //   sentiment2: "Neutral"
        //   // sentiment3(Microsoft): Negative 24%
        // },
        // {
        //   content: 
        //     "When they have to X-Ray almost your entire body…Just Dance. Gonna be ok.",
        //   celeb_username: "ladygaga",
        //   // sentiment1(DeepAI): Neutral, Negative,
        //   sentiment2:  "Neutral"
        //   // sentiment3(Microsoft): Negative 24%},
        // }
      ],
      selectedAcc: {name: "", twitterHandle: ""}, //twitteraccount
      navBarShow: false,
      
      top10: [
        twitteraccounts
      ]
    };
  }

  //change this to not be rendered upon sign in;
  // this function can be used for rendering favorites as well

  addToFavorites = (name, id) => {
    let favoriteTweeters = this.state.favorites;
    let favorite = {name: name, twitter_account_id: id}

    if (!favoriteTweeters.includes(favorite)) {
      this.setState({ favorites: [...this.state.favorites, favorite] });
    } else {
      let filteredTweeters = favoriteTweeters.filter(
        unFavorite => unFavorite !== favorite
      );
      this.setState({ favorites: [...filteredTweeters] });
    }
  }; //NEED TO RENDER TO FAVORITES PAGE

  //change this to not be rendered upon sign in;
  // this function can be used for rendering favorites as well

  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  getLoggedIn = json => {
    fetch("http://localhost:3000/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => {
          return { logged_in: true, user: data.user };
        });
      });
    this.setState({
      logged_in: true
    })
  };

  logOut = () => {
    localStorage.removeItem("token");
    this.setState(prevState => {
      return {
        logged_in: false,
        user: null
      };
    });
  };

  updateSelectedAcc = async (name, account) => {
    await this.setState({
      selectedAcc: { name: name, twitterHandle: account }
    })
    .then(
      fetch("http://localhost:3000/celebs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({ celebrity: celeb })
    })
    .then(response => response.json())
    // .then()
    .then(data => {
      data.map( obj => {
        this.setState({
          
        })
      })
    }) 
    );
  };

  toggleNav = () => {
    this.setState({
      navBarShow: !this.state.navBarShow
    });
  };

  signed = () => {
    return (
      <React.Fragment>
        <Menu.Item as={Link} to="/">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/favorites">
          <Icon name="heart outline" />
          Favorites
        </Menu.Item>
        <Menu.Item as={Link} to="/statistics">
          <Icon name="chart area" />
          Positivities
        </Menu.Item>
        <Menu.Item as={Link} to="/profile">
          <Icon name="user outline" />
          Profile
        </Menu.Item>
        <Menu.Item onClick={() => this.logOut()}>
          <Icon name="sign out" />
          Sign-out
        </Menu.Item>

      </React.Fragment>
    );
  };

  getTwitterIds = celeb => {
    fetch("http://localhost:3000/allcelebs", {
      method: "GET"
    })
      .then(resp => resp.json())
      .then(data => this.setState({ top10: [...this.state.top10, data] }))


    return 
  };

  componentDidMount() {
    this.getTwitterIds();
  }

  entered = () => {
    return (
      <React.Fragment>
        <FavBar favs={this.state.favorites} />
        <NavBarOpener toggle={this.toggleNav} />
        <SearchHome tweets={this.state.tweets} name={this.state.selectedAcc.name}/>
        <DropDown
          top10={this.state.top10}
          top10={this.state.top10}
          getTwitterIds={this.getTwitterIds}
        />
        <DropDown top10={this.state.top10}   getTwitterIds={thisgetTwitterIds} />
      </React.Fragment>
    );
  };

  render() {
    return (
      <Router>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => this.toggleNav()}
            vertical
            visible={this.state.navBarShow}
            width="thin"
          >
            {this.state.logged_in ? (
              this.signed()
            ) : (
              <Menu.Item
                onClick={this.showModal}
                // {() => this.onSignIn()}
              >
                <Icon name="sign in" />
                Sign-in
              </Menu.Item>
            )}
          </Sidebar>

          {this.state.show ? (
            <ModalContainer
              logged_in={this.state.logged_in}
              user={this.state.user}
              getLoggedIn={this.getLoggedIn}
              showModal={this.showModal}
              generateAllTweets={this.generateAllTweets}
              searchTwitter={this.searchTwitter}
            />
          ) : null}

          <Sidebar.Pusher dimmed={this.state.navBarShow}>
            <React.Fragment>
              <div className="App">
              <NavBarOpener toggle={this.toggleNav}/>  
                <Route exact path="/">
                  <Entered state={this.state} Acc={this.state.selectedAcc} enter={this.toggleEnter} toggle={this.toggleNav} searchTwitter={this.searchTwitter} updateSelectedAcc={this.updateSelectedAcc}/>
                </Route>

                <Route exact path="/favorites">
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
                  <Statistics top10={this.state.top10} loggedin={this.state.logged_in} toggleNav={this.toggleNav} tweets={this.state.tweets} selectedAcc={this.state.selectedAcc} top10={this.state.top10} searchTwitter={this.searchTwitter} updateSelectedAcc={this.updateSelectedAcc}/>
                </Route>
              </div>
            </React.Fragment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    );
  }
}

export default App;
