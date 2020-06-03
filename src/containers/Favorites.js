import React from "react";
import FavoriteCard from "../components_favorites/FavoriteCard";
import img from "../assets/favs1.2.jpg";
import NavBarOpener from "../components_sidebar/NavBarOpener";
import LoggedInHOC from "../HOC/LoggedInHOC";
import UserFavoriteTweeters from "../components_favorites/UsersFavoriteTweeters";
import AllCelebs from "../components_favorites/AllCelebs";
import { Card, Divider } from "semantic-ui-react";

// top10={this.state.top10}
// loggedin={this.state.logged_in}
// favs={this.state.favorites}
// user={this.state.user}
// deleteFav={this.deleteFav}
// toggleNav={this.toggleNav}

// {
//   key: "Rihanna",
//   value: "Rihanna",
//   text: "@rihanna",
//   bio:
//     "happy to finally share this collection of incredible memories. Make sure you pre-order #theRIHANNAbook now 📚💗"
// },

const Favorites = props => {
  // const map = () => {
  //   return props.favs.map(person => {
  //     //this.state.favorites passed from APP
  //     // render favCard
  //     return <FavoriteCard key={person.key} person={person} />;
  //   });
  // };

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      className="profile"
    >
      <NavBarOpener toggle={props.toggleNav} />
      <div className="favs">
        <Card.Group itemsPerRow={4}>
          {props.favs.map(tweeter => (
            <FavoriteCard
              key={tweeter.name}
              name={tweeter.name}
              id={tweeter.twitter_account_id}
              addToFavorites={props.addToFavorites}
            />
          ))}
        </Card.Group>
      </div>
      <Divider />
      <div className="all">
        <Card.Group itemsPerRow={4}>
          {props.top10.map(tweeter => (
            <FavoriteCard
              key={tweeter.value}
              name={tweeter.text}
              id={tweeter.value}
              addToFavorites={props.addToFavorites}
            />
          ))}
        </Card.Group>
      </div>
    </div>
  );
};

export default LoggedInHOC(Favorites);
