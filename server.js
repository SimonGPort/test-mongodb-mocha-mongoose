let express = require('express')
let app = express()
let route = express.Router()
var connectionMongoDB = require('./connection.js');





























app.listen(4000, '0.0.0.0', () => { console.log("Server running on port 4000") })