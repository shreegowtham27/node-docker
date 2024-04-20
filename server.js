'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';


AWS_SECRET_KEY_ID="AKIAIOSFODNN7EXAMPLE"

// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile("templates/index.html", { root: __dirname });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
