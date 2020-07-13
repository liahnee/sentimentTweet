import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const CardFront = (props) => {
	const [ hue ] = useState(props.sent >= 0 ? 'yellow' : 'blue');

	const icon = () => {
		if (props.sent > 0) {
			return 'smile outline';
		} else if (props.sent < 0) {
			return 'frown outline';
		} else {
			return 'selected radio';
		}
    };
    const dateFormat = 'DDD MMM DD HH:MM:SS Z YYYY';
    const weekdayNum = moment(props.date, dateFormat).weekday();
    const inDebugger = () => {
        debugger
    };
	return (
		<Card onClick={props.handleClick} className="tweetcard">
			<div className="content">
				<div className="header">					
					{moment(props.date, dateFormat).format('LL')} 
                    <br />
                    {console.log("testing moment", moment().isoWeekday(true, weekdayNum))}
                    {/* {inDebugger()} */}
                    {/* {moment().weekday(weekdayNum)}, &nbsp; */}
					{moment(props.date, dateFormat).format('LT')}
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
};

export default CardFront;
