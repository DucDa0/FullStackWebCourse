const db=require('../db');

// Login page
module.exports.login=(req,res)=>{
    res.render('auth/login');
};

module.exports.postLogin=(req,res)=>{
    let user = db.get('users').find({email: req.body.email}).value();
    if(!user){
        res.render('auth/login',{
            errors: ['User does not exist!']
        });
        return;
    }
    if(req.body.pwd!==user.pwd){
        res.render('auth/login',{
            errors: ['Wrong password!']
        });
        return;
    }
    res.cookie('userId', user.id);
    res.redirect('/');
};