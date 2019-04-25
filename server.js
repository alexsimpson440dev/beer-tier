const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

//routes
var indexRouter = require('./routes/index');
var beerRouter = require('./routes/beer');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

//something
app.set('views', './public/views')
app.set('view engine', 'pug')

app.use('/', indexRouter);
app.use('/beer.html', beerRouter);

app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}`)
);
