'use strict';

const app = require('../app');
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err)
    console.log(err);
  else {
    console.log('가동');
  }
});

//app.listen이 있는 파일이 서버를 실행시키는 파일이기 때문에 그점을 유념해서 해야한다.