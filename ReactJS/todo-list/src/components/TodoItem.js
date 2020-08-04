import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'
import './TodoItem.css'
import check from '../img/check.svg'
import checkDone from '../img/checkDone.svg'
export default class TodoItem extends Component {
    render() {
        const{item, onClick}=this.props;
        let url=check;
        if(item.isComplete){
            url=checkDone;
        }
        return (
            <div  className={classNames('TodoItem',{'TodoItem-complete': item.isComplete})}>
                <img alt="sss" onClick={onClick} style={{marginRight: '10px'}} width="32" height="32" src={url}/>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}
TodoItem.propTypes={
    item: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
}