const express = require('express');
const app = express();
const port = 5000;
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('../server/config/key');
const {Member} = require("../server/models/Member");

//application/x-www-form-urlencoded를 분석해서 갖고오는 것
// app.use(express.urlencoded({extended:true}));
app.use(express.urlencoded());
app.use(cookieParser());

//json  파일 분석해서 갖고오는 것
// app.use(express,json());
app.use(express.json());

const mongoose = require('mongoose');
const { default: userEvent } = require('@testing-library/user-event');
mongoose.connect(config.mongoURI).then(()=>console.log('connect'))
.catch(err => console.log(err));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

app.get('/', (req, res) => {
  res.send('backend server start');
})

// app.get('/api/hello',(req,res)=>{
//   res.send('hello World~')
// })

app.post('/api/member/register', (req,res)=>{
  //회원가입 할 때 필요한 정보들 ->  client에서 가져오면
  //디비에  insert


  const member = new Member(req.body);

  member.save((err,doc)=>{
    if(err) return res.json({success:false, err});
    return res.status(200).json({
      success:true
    })
  })
})

app.post('/login',(req,res)=>{
  //요청된 이메일 데이터베이스에서 찾기 
  Member.findOne({email:req.body.email},(err, member)=>{
    if(!member) return res.json({
      loginSuccess:false, 
      message:"이메일 없음"
    })

    //멤버 존재 true=> 데이터베이스에서 비번 확인
    member.comparePassword(req.body.password, (err,isMatch)=>{
      if(!isMatch) return res.json({
        loginSuccess:false,
        message:"비밀번호 불일치"
      })

      //비번 true => 토큰 생성 
      member.generateToken((err, member)=>{
        if(err) return res.status(400).send(err);
        
        //토큰 저장 (쿠키, 로컬스토리지 ...etc)
        res.cookie('x_auth', member.token)
        .status(200)
        .json({
          loginSuccess:true,
          memberId : member._id
        })
      })
    })
  })
  
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

