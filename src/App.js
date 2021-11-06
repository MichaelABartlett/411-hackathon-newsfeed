import {useEffect, useState} from 'react';
import Nav from "./components/Nav/Nav";

import './App.css';


const API_URL = "https://hn.algolia.com/api/v1/search?tags=front_page"



function App() {
  const [stories, setStories] = useState([])

  useEffect(() => {
    console.log("It did mount")
    // use fetch API
    fetch(API_URL).then((response) => response.json())
    .then((data) => setStories(data.hits));
  }, [])


  // this is just to make sure contacts are set in state
  useEffect(() => {
    console.log(stories)
    // Use fetch API
  }, [stories]);



  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
