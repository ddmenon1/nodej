const express = require('express');
const app = express();
app.listen(3001);
const route = require('./routes/appRoute');
app.use('/',route);