const db=require('../db');
const sgMail=require('@sendgrid/mail');
sgMail.setApiKey(process.env.API_KEY);
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
            // const msg = {
            //     to: 'test@example.com',
            //     from: 'test@example.com',
            //     subject: 'Sending with SendGrid is Fun',
            //     text: 'and easy to do anywhere, even with Node.js',
            //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            // };
            // sgMail.send(msg);
            // return;
        }
        bcrypt.compare(req.body.pwd, user.pwd, function(error, result) {
            if(result) {
                res.cookie('userId', user.id,{
                    signed: true
                });
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