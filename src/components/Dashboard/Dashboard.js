import React from 'react';
import './Dashboard.css'

const Dashboard = (props) => {
    
    return (
        props.stories.map((story, index) => {
            return (
                <li className="list">
                    <h3>{story.title}<a href={story.url} id={"url"}>{` (${story.url})`}</a></h3>
                    <p>{`${story.points} points | ${story.author} | ${story.time} | ${story.comments} comments`}</p>
                </li>
            )
        }))
}

export default Dashboard;