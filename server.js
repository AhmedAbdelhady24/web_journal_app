

let projectData = {}
const express = require('express');

/* Start up an instance of app */
const app = express();
const port = 8400;
/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));
// Spin up the server
// Callback to debug
app.listen(port, () => {console.log(`server is running and listening to port http://localhost:${port} `);});
// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
app.post('/addData', (req,res) => {
console.log(req.body)
projectData = {
        temp : req.body.temp ,
        feeling : req.body.feeling ,
        date : req.body.date 
    }


res.send(projectData)
console.log(projectData)



}


     )
    

app.get("/all",getData)

function getData(req,res){
    res.send(projectData)
    console.log(projectData)
}






