'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.hello);
router.get('/login', ctrl.output.login);
router.post('/login',ctrl.process.login);
//backtik을 이용하여 html파일을 복사하서 res.send(`파일내용`) 해주면 html의 파일내용이 적용된다.

module.exports = router;