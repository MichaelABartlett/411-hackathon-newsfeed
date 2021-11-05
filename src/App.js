import {useEffect, useState} from 'react';

import './App.css';


const API_URL = "https://hn.algolia.com/api"



function App() {
  const [stories, setStories] = useState([])

  useEffect(() => {
    console.log("It did mount")
    // use fetch API
    fetch(API_URL).then((response) => response.json())
    .then((data) => setStories(data.results));
  }, [])


  // this is just to make sure contacts are set in state
  useEffect(() => {
    console.log('It updated');
    console.log(stories)
    // Use fetch API
  }, [stories]);



  return (
    <div className="App">
      <header className="App-header">
        soon to be News Feed app
      </header>
    </div>
  );
}

export default App;
