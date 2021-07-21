'use strict';

const output ={
  
    //mvc 중 c에 해당하는 controller 제어
    hello : (req, res) => {
    res.render('home/index');
    },

  login : (req, res) => {
    res.render('home/login');
  },
}

const user = {
  id : ["jin","young","yang"],
  pwd: ["123","456","789"],
};

const process = {
  login : (req,res)=> {
    const id = req.body.id,
      pwd = req.body.pwd; // 클라이언트가 요청했을때 그 내용을 분석하려면 .body를 통해 볼수있다.

    if(user.id.includes(id)){ //includes는 특정문자열이 배열에 있는지 확인 하는 기능으로  user라는 object안에 있는 id라는 배열에 요청받은 클라이언트가 입력한 id가 있는지 확인
      const idx = user.id.indexOf(id); //indexOf는 인자로 받은 문자열이 몇번째 배열에 있는지 알려줌
      if(user.pwd[idx] === pwd){ //입력받은 id가 몇번째 배열에 속해있는지 알아온 다음 그것과 pwd의 배열에 해당하는 값이 일치하는지 확인
        return res.json({
          success:true, //id와 pwd의 배열이 매칭되었을 경우 json형식으로 res를 success:true로 응답한다.
        });
      }
    }
    return res.json({
      sucess:false,
      msg: "로그인에 실패하셨습니다."
    });
  },
};
 


module.exports = {
  output,
  process,
};