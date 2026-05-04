const express = require('express');
const os = require('os');
const path = require('path');
const app = express();
const port = 80;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const router = require('./router');

app.use('/', router);