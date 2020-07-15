import React from "react";

import LoggedInHOC from "../HOC/LoggedInHOC";
import { Card, Divider } from "semantic-ui-react";

import img from "../assets/favs1.2.jpg";


const Favorites = props => {


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
      <div className="favs">
        
      </div>
    </div>
  );
};

export default LoggedInHOC(Favorites);
