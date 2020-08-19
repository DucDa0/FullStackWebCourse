import React from 'react'
import '../css/NewTodo.css'
import classNames from 'classnames'
export default class NewTodo extends React.PureComponent {
    render() {
        const {item, index, onClick}=this.props;
        const content=`${index}. ${item.title}`;
        return (
            <div onClick={onClick} className={classNames('NewTodo-item',{isDone: item.isComplete})}>
                <div className="NewTodo-item_content">
                    <div className="content">
                        <span className={classNames('title',{isDone: item.isComplete})}>{content}</span>
                    </div>
                </div>
            </div>
        )
        
    }
}
