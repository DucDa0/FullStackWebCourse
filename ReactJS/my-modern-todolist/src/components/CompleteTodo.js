import React, { Component } from 'react'
import '../css/NewTodo.css'
export default class CompleteTodo extends Component {
    render() {
        const {item, index, onClick}=this.props
        const content=`${index}. ${item.title}`;
        return (
            <div onClick={onClick} className="NewTodo-item isDone">
                <div className="NewTodo-item_content">
                    <div className="content">
                        {/* <span style={{paddingRight: '10px'}} className="order">{index}.</span> */}
                        <span className="title isDone">{content}</span>
                    </div>
                </div>
            </div>
        )
        
    }
}
