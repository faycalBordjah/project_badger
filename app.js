const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const User = require('./api/models/userModel');
const Session = require('./api/models/sessionModel');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ipssi2019', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const sessionRoutes = require('./api/routes/sessionRoutes');
const userRoutes = require('./api/routes/userRoutes');

sessionRoutes(app);
userRoutes(app);

app.listen(port, hostname);
