import React from 'react';
import { Card } from 'semantic-ui-react'


const CardBack = (props) =>  {
  return (
    <Card onClick={props.handleClick} className='tweetcard'>
          <p>Senitment score: {props.sent}</p> 
    </Card>
  )
};

export default CardBack