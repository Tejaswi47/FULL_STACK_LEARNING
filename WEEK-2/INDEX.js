const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = 3000


app.use(bodyParser.json());

app.get('/', (req, res) => {    
    console.log(req.body);
    console.log(req.query.message);
    console.log(process.env.LASTNAME);
    data = {
        "FullName":  process.env.FULLNAME,
        "FirstName": process.env.FIRSTNAME,
        "LastName": process.env.LASTNAME,
        "Age": process.env.AGE,
        "Place": process.env.PLAce
    }
    res.send(data);    
})

app.post('/headers', (req, res) => {
    console.log(req.headers);
    res.send('The headers have been retrieved');
});

app.listen(port,()=>{
console.log(`listening on port ${port}`);
});