var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const mongoose = require('mongoose');
var app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({path:"./config.env"});

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

//連線local DB
// mongoose.connect("mongodb://localhost:27017/Post2").then(
//     res => console.log("連線資料庫成功"));

//連線遠端DB
mongoose.connect(DB).then( res => console.log("連線資料庫成功!!!"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
// app.use('/', function(req, res){
//     res.redirect('/posts');
// });
app.use('/users', usersRouter);
app.use('/posts', postsRouter);











module.exports = app;
