import React from 'react';
import './Dashboard.css'

const Dashboard = (props) => {
    



    return (

        <li style={{ listStyle: "none"}}>
            <h1>Dashboard</h1>
            <h5>{props.story}</h5>
            <h5>{props.url}</h5>
        </li>
    );
};

export default Dashboard;