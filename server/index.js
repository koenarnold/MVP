const express = require('express');
let app = express();
require('dotenv').config()
const axios = require('axios')
const controllers = require('./controllers.js')
const db = require('../database/db.js')

app.use(express.static(__dirname + '/../client/dist'))

app.use(express.json())

app.post('/createQuiz', controllers.createQuiz)

app.post('/saveQuiz', controllers.saveQuiz)

app.post('/getQuizzes', controllers.getQuizzes)

app.get('/testdb', controllers.testDB)

app.get('/testdbclear', controllers.testDBClear)

app.listen(process.env.HOSTPORT, function() {
  console.log(`listening on port ${process.env.HOSTPORT}`);
});
