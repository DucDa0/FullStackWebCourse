import React, { Component } from 'react'

export default class ItemsTable extends Component {
    render() {
        const {item}=this.props;
        let className='';
        if((this.props.index)%2===0){
            className='is-even';
        }
        return (
            <tr className={className}>
                <td>{this.props.index}</td>
                <td>{item.First}</td>
                <td>{item.Last}</td>
                <td>{item.Handle}</td>
            </tr>
        )
    }
}
