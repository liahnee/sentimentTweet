import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';


const Stream = (props) => {
  
	const createLabels = () => {
    const dateFormat = 'DDD MMM DD HH:MM:SS Z YYYY';
    	
		const labels = props.tweets[0].created_at ? props.tweets.map(tweet => moment(tweet.created_at, dateFormat).format('LL')) : props.tweets.map(() => "");
		return labels;
	};

	const createData = props.tweets.map((tweet) => {
		return tweet.sentiment;
	});

	const streamData = () => {
		return {
			labels: createLabels(),
			datasets: [
				{
					label: 'Dates',
					fill: false,
					lineTension: 0.5,
					backgroundColor: 'rgba(75,192,192,1)',
					borderColor: 'rgba(0,0,0,1)',
					borderWidth: 2,
					// data: [65, 59, 80, 81, 56]
					data: createData
				}
			]
		};
  };
  
  

	return (
		<div className="stream">
			<Line
				data={streamData()}
				options={{
					title: {
						display: true,
						text: 'Sentiment Trend of Tweets',
						fontSize: 30,
						fontColor: 'rgb(55, 46, 175)'
					},
					legend: {
						display: true,
						position: 'right'
					},
					label: {
						fontColor: 'rgba(0, 0, 0)'
					}
				}}
			/>
		</div>
	);
};

export default Stream;
