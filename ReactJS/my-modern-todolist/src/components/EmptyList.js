import React from 'react'
import box from '../img/box.svg'
import '../css/EmptyList.css'
export default class EmptyList extends React.PureComponent {
    render() {
        return (
            <div className="empty-list">
                <div className="empty-list-wrap">
                    <p className="empty-notify up"><span>Seem like</span> </p>
                    <p className="empty-notify under"><span style={{marginRight: '8px'}}>You have no list</span></p>
                    <img style={{marginTop: '20px'}} width="104" height="104" src={box} alt="box"/>
                </div>
            </div>
        )
    }
}
