import React, { Component } from 'react'
// import classNames from 'classnames'
import '../css/Modal.css'
export default class Modal extends Component {
    render() {
        const {onClick,children}=this.props;
        console.log(children)
        return (
            <div className="Modal">
                <div className="Modal-wrap">
                    <div className="Modal-content">
                        <div className="head">
                            {children[0]}
                            <div onClick={onClick} className="close"><i className="fa fa-times" aria-hidden="true"></i></div>
                        </div>
                        <div className="body">
                            {children[1]}
                        </div>
                        <div className="foot">
                            <button onClick={onClick} className="accept">Accept</button>
                            <button onClick={onClick} className="decline">Decline</button>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}
