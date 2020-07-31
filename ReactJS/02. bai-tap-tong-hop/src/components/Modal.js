import React, { Component } from 'react'
import classNames from 'classnames'
import '../css/Modal.css'
export default class Modal extends Component {
    constructor(){
        super();
        this.state={
            isClose: false
        };
        this.closeDialog=this.closeDialog.bind(this);
    }
    closeDialog(){
        this.setState({isClose: true});
    }
    render() {
        const {trigger}=this.props;
        const {isClose}=this.state;
        return (
            <div className={classNames('Modal',{display: trigger},{closeDialog: isClose})}>
                <div className="Modal-wrap">
                    <div className="Modal-content">
                        <div className="head">
                            <h2 className="title">This is my life</h2>
                            <div onClick={this.closeDialog} className="close"><i className="fa fa-times" aria-hidden="true"></i></div>
                        </div>
                        <div className="body">
                            <p className="article">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="foot">
                            <button onClick={this.closeDialog} className="accept">Accept</button>
                            <button onClick={this.closeDialog} className="decline">Decline</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
