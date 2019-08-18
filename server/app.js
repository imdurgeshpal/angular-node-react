const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const teacherRoute = require('./src/routes/teacher.route'); // Imports routes for the teachers

const studentRoute = require('./src/routes/student.route'); // Imports routes for the students

// initialize our express app
const app = express();

// adding cors
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use('/api/teacher', teacherRoute);

app.use('/api/student', studentRoute);


let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});