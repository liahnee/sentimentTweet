import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";

import CardFront from './CardFront';
import CardBack from './CardBack';

const CardFlip = (props) => {
  console.log("cardflip props", props)
  const [isFlipped, setIsFlipped ] = useState(false);


    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" id='flipcard'>
        <CardFront 
          key="front"
          handleClick={() => setIsFlipped(!isFlipped)}
          content={props.tweet.tweet}
          date={props.tweet.created_at}
          sent={props.tweet.sentiment}
         />

        <CardBack
          key="back"
          handleClick={() => setIsFlipped(!isFlipped)}
          sent={props.tweet.sentiment}
        ></CardBack>
      </ReactCardFlip>
    );

}

export default CardFlip;
