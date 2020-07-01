const User = require('../../models/users_model');
const Tran = require('../../models/transactions_model');
const nodemailer =  require('nodemailer');
const bcrypt = require('bcrypt');

module.exports.home=(req,res)=>{
    res.render('auth/login');
}
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
                var data=await Tran.find({userId: userFind.id}).exec();
                res.json(data);
                // res.redirect('/api/transactions');
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