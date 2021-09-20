var express = require('express');
var app = express();



var insertRouter = require('./router/insert-router');

app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));


app.use(express.urlencoded({ extended: true }));

app.use('/favicon', express.static('public/images/favicon.ico'));

app.use('/', insertRouter);


app.listen(app.get('port'));