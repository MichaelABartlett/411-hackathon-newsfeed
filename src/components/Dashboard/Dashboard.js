import React from 'react';
import './Dashboard.css'

const Dashboard = (props) => {
    return (
        <div>
            {props.stories.map((story) => {
                return(
                <li>{story.title}</li>
                )
            })}
        </div>
    );
};

export default Dashboard;