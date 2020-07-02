import React from 'react';
import { Card } from 'semantic-ui-react'


const CardBack = (props) =>  {
  return (
    <Card onClick={props.handleClick} className='tweetcard'>
          {props.sent}
    </Card>
  )
};

export default CardBack