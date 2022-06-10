// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port = 8000;

// Setup Server
const server = app.listen(port, listening);

function listening() {
    console.log(`Server is running on port: ${port}`);
}

// GET route
app.get('/info', sendInfo);

function sendInfo(request, response) {
    // Simple callback function to return data object
    response.send(projectData);
}

// POST route
app.post('/projectInfo', addInfo);

function addInfo(request, response) {
    // Storing requested info as a data object and assigning it to projectData
    const info = request.body
    const newEntry = {temp: info.temp, feel: info.feel, date: info.date};
    projectData = newEntry;
    console.log(projectData);
}