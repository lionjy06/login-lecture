//모듈
const express = require('express');
const app = express();

const PORT = 3000;
// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set("views", "./src/views"); // view setting
app.set("view engine", "ejs"); //ejs사용하려면 npm i ejs --save 해줘야 사용가능
app.use(express.static(`${__dirname}/src/public`)); //app.js파일이 있는 디렉토리 경로에 /src/public을 추가해줌
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//extended:true는 url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 폼횔 경우 제대로 인식되지 않는 문제를 해결해줌


app.use('/', home); // use => 미들웨어를 등록하는 메소드

module.exports = app;

