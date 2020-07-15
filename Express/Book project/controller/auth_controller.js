// const db=require('../db');
const User = require('../models/users_model');
const Session=require('../models/sessions_model');
const nodemailer =  require('nodemailer');
// const sgMail=require('@sendgrid/mail');
// sgMail.setApiKey(process.env.API_KEY);
// const md5=require('md5');
const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
// Login page

const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY_IMAGE, 
    api_secret: process.env.API_SECRET 
});

module.exports.login=(req,res)=>{
    res.render('auth/login');
};
module.exports.postLogin=async(req,res)=>{
    // let userFind = db.get('users').find({email: req.body.email}).value();
    let userFind=await User.findOne({email:req.body.email}).exec();
    if(userFind){
        if(userFind.wrongLoginCount>=4){
            bcrypt.compare(req.body.pwd, userFind.pwd, async function(error, result) {
                if(!result){
                    // db.get('users').find({id: userFind.id}).assign({wrongLoginCount: ++userFind.wrongLoginCount}).write();
                    await User.findOneAndUpdate({_id:userFind.id},{wrongLoginCount: ++userFind.wrongLoginCount}).exec();
                }
            });
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                auth: {
                    user: 'naruto9xbmt3@gmail.com',
                    pass: 'xuandat123'
                }
            });
            let content = `
                <div style="padding: 10px; background-color: #003375">
                    <div style="padding: 10px; background-color: white;">
                        <h4 style="color: #0085ff">Your Account is blocked</h4>
                        <span style="color: black">If you want to unblock your account, contact <strong>0385639830</strong></span>
                    </div>
                </div>
            `;
            let mainOptions = { 
                from: "Admin",
                to: userFind.email,
                subject: "Test Nodemailer",
                html: content
            };
            transporter.sendMail(mainOptions, function(err, info){
                if(err){
                    res.render('auth/login',{
                        errors: ['Loi gui mail']
                    });
                    return;
                }
                res.render('auth/login',{
                    errors: ['Mot email da duoc gui den tai khoan cua ban']
                });
                return;
            });
            // res.render('auth/login',{
            //     errors: ['Wrong username or password over 3 times, your account is blocked!']
            // });

            // const msg = {
            //     to: 'test@example.com',
            //     from: 'test@example.com',
            //     subject: 'Sending with SendGrid is Fun',
            //     text: 'and easy to do anywhere, even with Node.js',
            //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            // };
            // sgMail.send(msg);
            return;
        }
        bcrypt.compare(req.body.pwd, userFind.pwd, async function(error, result) {
            if(result) {
                res.cookie('userId', userFind.id,{
                    signed: true
                });
                // let yourCart=db.get('sessions').find({id : req.signedCookies.sessionId}).get('cart').value();
                let Cart=await Session.findById({_id:req.signedCookies.sessionId}).exec();
                if(Cart.get('cart')){
                    res.redirect('/cart/index');
                    return;
                }
                res.redirect('/');
            } else {
                res.render('auth/login',{
                    errors: ['Wrong username or password!']
                });
                // db.get('users').find({id: userFind.id}).assign({wrongLoginCount: ++userFind.wrongLoginCount}).write();
 
                await User.findOneAndUpdate({_id:userFind.id},{wrongLoginCount: ++userFind.wrongLoginCount}).exec();
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
module.exports.register=(req,res)=>{
    res.render('auth/register');
};
module.exports.postRegister=async (req,res)=>{
    var errors=[];
    if(req.file===undefined){
        req.body.avatarUrl="http://res.cloudinary.com/codersx0906/image/upload/v1593045870/tzpxk0kftxnq7ipapj0n.png";
        req.body.wrongLoginCount=0;
        req.body.shopUrl="";
        bcrypt.hash(req.body.pwd, 10, async function(err, hash) {
            if(!err){
                req.body.pwd=hash;
                await User.insertMany(req.body,(err, docs)=>{
                    if(!err){
                        errors.push('Resgister Complete');
                        res.render('auth/register',{
                            errors: errors,
                            check: true
                        })
                        return;
                    }
                    errors.push('Error');
                    res.render('auth/register',{
                        errors: errors,
                        check: false
                    })
                });
            }
        });
        
    }
}

module.exports.logOut=async(req,res)=>{
    res.clearCookie('userId');
    return res.redirect('/');
}