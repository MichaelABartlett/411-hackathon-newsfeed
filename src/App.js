import {useEffect, useState} from 'react';
import Nav from "./components/Nav/Nav";
import Dashboard from "./components/Dashboard/Dashboard";


import './App.css';

const API_URL = "https://hn.algolia.com/api/v1/search?tags=front_page"

function App() {
  const [stories, setStories] = useState([])

  useEffect(() => {
    console.log("It did mount")
    // use fetch API
    fetch(API_URL).then((response) => response.json())
    .then((data) => setStories(data.hits));

    console.log('This line is the best line of code I have ever written.')
  }, [])


  // this is just to make sure contacts are set in state
  useEffect(() => {
    console.log(stories)
    // Use fetch API
  }, [stories]);


  return (
    <div className="App">
      <Nav />
      <ol>
          <Dashboard stories={stories} />
      </ol>
    </div>
  );
}



export default App;
