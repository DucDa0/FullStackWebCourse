const db=require('../db');

const md5=require('md5');
const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
// Login page
module.exports.login=(req,res)=>{
    res.render('auth/login');
};

module.exports.postLogin=(req,res)=>{
    let user = db.get('users').find({email: req.body.email}).value();
    if(user){
        if(user.wrongLoginCount>=4){
            res.render('auth/login',{
                errors: ['Wrong username or password over 3 times, your account is blocked!']
            });
            bcrypt.compare(req.body.pwd, user.pwd, function(error, result) {
                if(!result){
                    db.get('users').find({id: user.id}).assign({wrongLoginCount: ++user.wrongLoginCount}).write();
                }
            });
            return;
        }
        bcrypt.compare(req.body.pwd, user.pwd, function(error, result) {
            if(result) {
                res.cookie('userId', user.id);
                res.redirect('/');
            } else {
                res.render('auth/login',{
                    errors: ['Wrong username or password!']
                });
                db.get('users').find({id: user.id}).assign({wrongLoginCount: ++user.wrongLoginCount}).write();
                return;
            } 
        });
    }
    else{
        res.render('auth/login',{
            errors: ['Wrong username or password!']
        });
        return;
    }
    // if(md5(req.body.pwd)!==user.pwd){
    //     res.render('auth/login',{
    //         errors: ['Wrong password!']
    //     });
    //     return;
    // }
};