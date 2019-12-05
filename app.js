const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const hostname = '0.0.0.0';
const port = 8080;
const User = require('./api/models/userModel');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo/ipssi2019', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/userRoutes');
routes(app);

app.listen(port, hostname);
