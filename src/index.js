import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// let express = require('express');
// let app = express();

// // enable the application to be able to parse JSON bodies in post/put
// app.use(express.json())

// require("dotenv").config(); // it does not need to be a variable

// require("./connection/db");

// // selecting the port to use
// let port = process.env.PORT;




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// app.listen(port, () => {
//   console.log(`Web server is listening on port ${port}!`); // console log what port we are using
// })