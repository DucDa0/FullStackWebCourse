import React, { Component } from 'react'
import '../css/DynamicClassNames.css';
import ItemsTable from './ItemsTable';

export default class DynamicClassNames extends Component {
    render() {
        const list=[
            {First: 'Kien', Last: 'Gay', Handle: '@gay'},
            {First: 'Bao', Last: 'Thui', Handle: '@thui'},
            {First: 'Hoa', Last: 'Mad', Handle: '@mad'},
            {First: 'Phu', Last: 'Khung', Handle: '@khung'}
    ]
        return (
            <div className="DynamicClassNames">
                <div className="DynamicClassNames-wrap">
                    <table className="table">
                        <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                        </tr>
                        {
                            list.map((item,index)=>{
                                return <ItemsTable index={index} item={item}/>
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}
