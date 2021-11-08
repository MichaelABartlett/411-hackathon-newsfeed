import React from 'react';
import './Dashboard.css'

const Dashboard = (props) => {
    
    return (

        <li className="list">
            <h3>{props.story}<span id={"url"}>{` URL:${props.story_url}`}</span></h3>
            <p>{`${props.points} | ${props.author} | ${props.time} | ${props.comments} comments`}</p>
        </li>
    );
};

export default Dashboard;