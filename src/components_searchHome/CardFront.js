import React, { useState } from "react";
import { Card } from "semantic-ui-react";

const CardFront = props => {

    const [ hue ] = useState(props.sent >= 0? "yellow" : "blue")

  const icon = () => {
    if (props.sent > 0) {
      return "smile outline" }
    else if (props.sent < 0) {
      return "frown outline"}
    else {
      return "selected radio"    
    }
  }

//   const hue = props.sent === "Positive"? "yellow" : "blue";

  return (
    <Card onClick={props.handleClick} className="tweetcard">
        <div className="content">
          <div className="header">
            {props.date}
            <span className="right floated">
              <i className={`icon-left large ${icon()} ${hue} icon`} />
            </span>
          </div>
          <div className="description">
            <p>{props.content}</p>
          </div>
        </div>
    </Card>
  );

}

export default CardFront;
