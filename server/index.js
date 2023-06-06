const express = require('express');
let app = express();
require('dotenv').config
const db = require('../database/db.js')

var port = process.env.HOSTPORT || 3001

app.use(express.static(__dirname + '/../client/dist'))

app.use(express.json())

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});