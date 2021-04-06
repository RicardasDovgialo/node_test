const express = require('express');

const app = express();

//Create
app.post('/data', (req, res) => {
    // this creates model
    // this saves model
  });

//Read
app.get('/data', (req, res) => {
    // this reads db
  });

//Update
app.put('/data', (req, res) => {
    //this updates the entry
})

//Delete
app.delete('/data', (req, res) => {
    //this deletes
})

app.listen(5000, () => {
    console.log('listening on 5000')
  });