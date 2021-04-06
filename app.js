const express = require('express');
const config = require('./config');

const app = express();

require('./routes/data_routes')(app);

app.listen(config.port, () => {
    console.log(`listening on ${config.port}`)
  });