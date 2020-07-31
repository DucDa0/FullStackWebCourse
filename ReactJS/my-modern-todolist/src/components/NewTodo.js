import React, { Component } from 'react'
import '../css/NewTodo.css'
import classNames from 'classnames'
export default class NewTodo extends Component {
    render() {
        const {item, index, onClick}=this.props
        return (
            <div onClick={onClick} className={classNames('NewTodo-item',{disabled: item.isComplete})}>
                <div className="NewTodo-item_content">
                    <div className="content">
                        <span style={{paddingRight: '10px'}} className="order">{index}.</span>
                        <span className="title">{item.title}</span>
                    </div>
                </div>
            </div>
        )
        
    }
}
