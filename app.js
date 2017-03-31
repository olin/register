// importing packages
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// setting up routes
const index = require('./routes/index');

const app = express();

app.set('port', (process.env.PORT || 3000));

// view engine setup, middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Routes for our backend models
app.use('/', index);

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
