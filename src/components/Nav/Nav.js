import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './Nav.css'

const Nav = (props) => {

    const [filterTerm, setFilterTerm] = useState()
    const [lockedTerm, setLockedTerm] = useState()


    function handleSubmit(e) {
        e.preventDefault()
        setFilterTerm(filterTerm)
        setLockedTerm(filterTerm)
        setFilterTerm("")

        
    }



    useEffect(() => {
        console.log("locked term in Nav: " + lockedTerm);
    }, [lockedTerm]);


    return (
        <div id={"nav-grid"}>
            <h2 id={"title"}>Hacker News Feed</h2>
            <form onSubmit={handleSubmit} >
            <select id={"nav-select"}>
                    <option value={"blanks"}>Story Name</option>
                    <option value={"blanks2"}>Author</option>
                    <option value={"blanks3"}>Number of Comments</option>
                </select>
                <select id={"filter-for"}>
                    <option value={"blanks4"}>Filter by Time</option>
                    <option value={"blanks5"}>Last Hour</option>
                    <option value={"blanks6"}>Last 12 Hours</option>
                    <option value={"blanks7"}>Last 24 Hours</option>
                </select>
                <input id={"searchbar"} type="text" name="name" placeholder={"Enter keyword..."} value={filterTerm} onChange={e => setFilterTerm(e.target.value)} />
                <button id={"searchbutton"} onclick={() => props.searchSet(lockedTerm)} type="submit" name="search" >Search</button>
            </form>
        </div>
    );
};

export default Nav;

