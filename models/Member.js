const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;  //10자리 salt 이용 -> 비밀번호 암호화
const jwt = require('jsonwebtoken');


const memberSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique:1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname:{
        type:String,
        maxlength : 50,
    },
    role:{
        type: Number,  //member  등급
        default:0
    },
    image:String,
    token:{
        type: String
    },
    tokenExp:{  //token  사용기간
        type: Number
    }
})

memberSchema.pre('save', function(next){
    //회원가입 전에 하는 일 => 비밀번호 암호화
    var member = this;

    if(member.isModified('password')) {        
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err);
            bcrypt.hash(member.password, salt, function(err, hash) {
                //myPlaintextPassword : 순수 비밀번호
                // Store hash in your password DB.
                if(err) return next(err);
                member.password = hash;
                next()
            });
        });        
    } else {
        next()
    }
})

memberSchema.methods.comparePassword = function(plainPassword, callback){
    //plainPassword 1234567  암호화된 비밀번호  :
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return callback(err)
        callback(null, isMatch)
    })
}

memberSchema.methods.generateToken = function(callback){
    console.log(callback);
    var member = this;
    //jsonwebToken 이용해서 토큰 생성하기
    var token = jwt.sign(member._id.toHexString(), 'secretToken')
    //member._id + 'secretToken' = token
    member.token = token
    member.save(function(err, member){
        if(err) return callback(err)
        callback(null, member);
    })
}
const Member = mongoose.model('Member',memberSchema);

module.exports = {Member};