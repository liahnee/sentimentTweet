import React from "react";

const ActualTweetCard = props => {
  const icon = () => {
    if (props.sent === "Positive") {
      return "smile outline" }
    else if (props.sent === "Negative") {
      return "frown outline"}
    else {
      return "selected radio"    
    }
  }
  const hue = props.sent === "Positive"? "yellow" : "blue";
  return (
    <div onClick={props.handleClick} className="tweetback">
      <div className="ui card">
        <div className="content">
          <div className="header">
            {/* {props.date} */}
            <span className="right floated smile">
              <i className={`icon-left large ${icon()} ${hue} icon`} />
            </span>
          </div>
          <div className="description">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ActualTweetCard
