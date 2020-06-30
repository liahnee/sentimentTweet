import React from "react";
import '../assets/stylesheets/Statistics.css';

import img from '../assets/stats2.jpg';
import NavBarOpener from "../components_sidebar/NavBarOpener";
import LoggedInHOC from "../HOC/LoggedInHOC";
import Stream from "../components/Stream";
import DropDown from "../components/Dropdown";

const Statistics = props => {

    // const labels = props.tweets.map( tweet => {
    //     return tweet.date})

    // const data = props.tweets.map( tweet => {
    //     return tweet.sentiment2}).slice(0,8)

    
    // const render = () => {
    //     return <Stream labels={labels} data={data} acc={props.selectedAcc}/>
    // }
    // return (
    //     <div style={{  
    //         backgroundImage: `url(${img})`,
    //         backgroundPosition: 'center',
    //         backgroundSize: 'cover',
    //         backgroundRepeat: 'no-repeat'
    //         }}
    //     className="stats">
    //         <NavBarOpener toggle={props.toggleNav}/>   
    //         <DropDown />
    //         <Stream labels={labels} data={data} acc={props.selectedAcc}/>
    //     </div>
    // )
    return (<div className="statistics"></div>);
};

export default LoggedInHOC(Statistics);


