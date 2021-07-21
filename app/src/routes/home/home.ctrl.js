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

    if(user.id.includes(id)){
      const idx = user.id.indexOf(id);
      if(user.pwd[idx] === pwd){
        return res.json({
          success:true,
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