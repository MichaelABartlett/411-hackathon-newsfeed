import {useEffect, useState} from 'react';
//import Nav from "./components/Nav/Nav";
import Dashboard from "./components/Dashboard/Dashboard";


import "./components/Nav/Nav.css"
import './App.css';

const API_URL = "https://hn.algolia.com/api/v1/search?tags=front_page"

function App() {
  const [stories, setStories] = useState([])
  const [filterTerm, setFilterTerm] = useState()
  const [lockedTerm, setLockedTerm] = useState()
  

  useEffect(() => {
    console.log("It did mount")
    // use fetch API
    fetch(API_URL).then((response) => response.json())
    .then((data) => setStories(data.hits));

  }, [])


  function handleSubmit(e) {
    e.preventDefault()
    setFilterTerm(filterTerm)
    setLockedTerm(filterTerm)
    setFilterTerm("")
}

useEffect(() => {
  console.log("locked term in Nav: " + lockedTerm);
}, [lockedTerm]);
 
  

 
  useEffect(() => {
    console.log(stories)
  }, [stories]);

  function filterSearch(term) {
    return (item) => {
      return (
        item.title.toLowerCase().includes(term.toLowerCase())
      )
    }
  }

  return (
    <div className="App">
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
                      <button id={"searchbutton"} type="submit" name="search" >Search</button>
                  </form>
              </div>
      
      <ol>
        { lockedTerm ?
      <Dashboard
        stories={stories.filter(filterSearch(lockedTerm))}/> :
      <Dashboard
        stories={stories} />
      }
      </ol>
    </div>
  );
}



export default App;

