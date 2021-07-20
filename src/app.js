//모듈
const express = require('express');
const app = express();

const PORT = 3000;
// 라우팅
const home = require('./routes/home')

// 앱 세팅
app.set("views", "./views"); // view setting
app.set("view engine", "ejs"); //ejs사용하려면 npm i ejs --save 해줘야 사용가능


app.use('/', home); // use => 미들웨어를 등록하는 메소드

module.exports = app;

