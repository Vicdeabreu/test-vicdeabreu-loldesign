const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();


// Importing the routes
const productsRoutes = require('./routes/produtos');

// Settings
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(require('./routes/produtos'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), ()=> {
  console.log('Server on port', app.get('port'));
});