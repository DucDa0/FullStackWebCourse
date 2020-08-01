import React, { Component } from 'react'
import '../css/NewTodo.css'
import classNames from 'classnames'
export default class NewTodo extends Component {
    render() {
        const {item, index, onClick}=this.props;
        const content=`${index}. ${item.title}`;
        return (
            <div onClick={onClick} className={classNames('NewTodo-item',{isDone: item.isComplete===true})}>
                <div className="NewTodo-item_content">
                    <div className="content">
                        <span className={classNames('title',{isDone: item.isComplete===true})}>{content}</span>
                    </div>
                </div>
            </div>
        )
        
    }
}
