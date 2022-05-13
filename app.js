//allows express to be used
const express = require('express');

// allows cors to be used
const cors = require('cors');

//create a new express application
const app = express();


// allows for json to be read
app.use(express.json()) 
app.use(cors());


//sets homepage to html
app.get('/', (req, res) => {
    res.send("hello world")
});

//

module.exports = app;
