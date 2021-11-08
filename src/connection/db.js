let mysql = require("mysql");

require("dotenv").config(); // this will allow us to use the .env file


// giving express information to connect to the database
let pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL)


// // actually creating the connection
// connection.connect();

// // issuing a query on the connection and the callback tells it what to do when the query finishes
// //connection.query("select now()", function(error, rows){ // use this to check connection to database and get time stamp
// connection.query("use " + process.env.MYSQL_DATABASE, function(error, rows){
//     if(error){
//         console.log("DB Query error", error);
//     } else {
//         console.log("Query results", rows);
//     }
// });

// we are making the entire file available to the program 
module.exports = pool ;
