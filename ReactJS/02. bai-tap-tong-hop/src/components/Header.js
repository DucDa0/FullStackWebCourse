import React, {Component} from 'react';
import '../css/Header.css';
class Header extends Component{
    render(){
        return (
            <div className="Header">
                <ul className="Header-list">
                    <li className="list-item">
                        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                        <a href="/back" class="btn-back"> Go back</a>
                    </li>
                    <li className="list-item">
                        <a href="/coders-x">
                            <img width="60" height="60" src="https://media-exp1.licdn.com/dms/image/C510BAQEzFvhk4pzCIg/company-logo_200_200/0?e=2159024400&v=beta&t=anyiAdcXpW6Tx970ysepdfa2Tmn1e7KXSa5HZv5EOZA" alt="logo"/>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="/signup" className="btn-sign-up"><span>Sign up</span></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;