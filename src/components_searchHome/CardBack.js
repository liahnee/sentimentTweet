import React from 'react';
import { Card } from 'semantic-ui-react'


const CardBack = (props) =>  {
  // const roundScore = () => {
  //   return props.sent.splice(0, 4)
  // }
  return (
    <Card onClick={props.handleClick} className='tweetcard'>
      <Card.Content header="Sentiment Score:" />
      <Card.Content description={props.sent} />
    </Card>
  )
};

export default CardBack