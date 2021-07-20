'use strict';

//mvc 중 c에 해당하는 controller 제어
const hello = (req, res) => {
  res.render('home/index');
};

const login = (req, res) => {
  res.render('home/login');
};

module.exports = {
  hello,
  login,
};