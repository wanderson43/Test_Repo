var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Basic App' });
});

module.exports = router;

// SQL Connection basic set-up
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'HMPupgrade16!', //You have to use your password and username for your locak db.
  database : 'sakila' //this was a sample database that mysql provided. 
});

connection.connect()
// You can change the query for the select statment by changing the first argument
connection.query('SELECT * FROM actor LIMIT 10', function (err, result) {
  if (err) throw err

  console.log(result);
})

connection.end()
