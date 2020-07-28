import React from 'react';

function LoginForm(){
    return(
        <div className="LoginForm">
            <form className="input-form" method="POST">
                <div className="input">
                    <div className="input-wrap">
                        <label className="label" for="userName">Username</label>
                        <input type="text" name="userName" id="userName" className="userName-input"/>
                    </div>
                </div>
                <div className="input">
                    <div className="input-wrap">
                        <label className="label" for="pwd">Password</label>
                        <input type="password" name="pwd" id="pwd" className="pwd-input"/>
                    </div>
                </div>
                <input className="submit" type="submit" value="OK, I'm fine!"/>
                <div className="forgot">
                    <input type="checkbox" className="checkbox"/><span className="text">Keep me signed in</span>
                </div>
            </form>
            <div className="footer">
                <ul className="footer-content">
                    <li className="footer-item"><a className="footer-item-link" href="/forgotUN">Forgot username?</a></li>
                    <li className="footer-item"><a className="footer-item-link" href="/forgotPWD">Forgot username?</a></li>
                </ul>
            </div>
        </div>
    );
}

export default LoginForm;