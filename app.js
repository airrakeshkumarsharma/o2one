require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

/** Express Server */
// const app = express();
// const server = http.createServer(app);
// const socketServer = io(server);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Initialization */
const database = require('./config/database');
database.initialize((error) => {
	console.log('Connected to O2One Database');
});

/** Specify Routes */
const { userRoute } = require('./routes/index');
app.use('/users', userRoute);

/** NOTE Only For this project to Show the Web Page */
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/view/index.html');
});

/** Socket */
const { chatRoute } = require('./routes/index');
io.on('connection', chatRoute.chat);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

/**
 * Listen on provided port, on all network interfaces.
 */
const PORT = process.env.PORT;
http.listen(PORT, () => {
	console.log('Server is Started on PORT', PORT);
});
