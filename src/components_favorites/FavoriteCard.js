import React from "react";
import { Card, Image } from "semantic-ui-react";

const FavoriteCard = props => {
  // const { name, id } = props.tweeter;
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.id}</Card.Meta>
        {/* <Card.Description>{tweeter.bio}</Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <div className="extra content">
          <span className="left floated smile">
            <i className={`icon-left large ${"smile outline"} icon`} />
          </span>
          <span className="right floated heart">
            <i
              className={`icon-right large ${"heart outline"} icon`}
              onClick={() => props.addToFavorites(props.name, props.id)}
            />
          </span>
          <span className="left floated frown">
            <i className={`icon-left large ${"frown outline"} icon`} />
          </span>
        </div>
      </Card.Content>
    </Card>
  );
};

export default FavoriteCard;

/* <div className="ui column">
      <div className="ui card" onClick={() => addToFavorites(tweeter)}>
        <div className="image">
          <img src={process.env.PUBLIC_URL + "/logo192.png"} alt=" " />
        </div>
        <div className="content">
          <div className="header">
            {tweeter.value}
            {tweeter.text}
          </div>
          <div className="meta text-wrap">
            <medium>{tweeter.bio}</medium>
          </div>
        </div>
        <div className="extra content">
          <span className="left floated smile">
            <i className={`icon-left large ${"smile outline"} icon`} />
          </span>
          <span className="right floated heart">
            <i className={`icon-right large ${"heart outline"} icon`} />
          </span>
          <span className="left floated frown">
            <i className={`icon-left large ${"frown outline"} icon`} />
          </span>
        </div>
      </div>
    </div> */
