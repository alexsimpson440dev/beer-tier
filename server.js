const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// setting the view location & engine
app.set('views', './public/views')
app.set('view engine', 'pug')

// routes & express calls
var indexRouter = require('./routes/index');
var beerRouter = require('./routes/beer');

app.use('/', indexRouter);
app.use('/beer', beerRouter);

// call server
app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}`)
);
