'use strict';

const id = document.querySelector('#id'),
    pwd = document.querySelector('#pwd'),
    loginBtn = document.querySelector('button');

console.log(id);

loginBtn.addEventListener('click',login);

function login(){
  const req = {
    id : id.value,
    pwd : pwd.value,
  } //id에 입력한 값을 받아올수있음 (변수.value), fetch() => 입력받아온 값(id와 pwd값을 서버에 전달해주는 api)
  console.log(req);
};