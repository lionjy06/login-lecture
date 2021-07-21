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
  
  fetch('/login',{
    method: "POST", //method에는 get,post,put,delete 등 여러가지가 있는데 post는 생성(create)에 해당하여, 데이터를 생성시킨다.
    headers: {
      "Content-type":"application/json" //headers는 클라이언트가 응답받고자 하는 데이터 타입을 정할수 있는데 "content-type"을 key로 했을때 text/html, image/png(jpg) 또는 위와 같은 application/json등 을 지정 할 수 있다.
    },
    body: JSON.stringify(req) //Json.stringify(object) => Json형태의 object를 string형태로 변환
  }) //fetch설정시 어느 경로에서 데이터를 서버와 주고 받을지 정해줘야한다.
};