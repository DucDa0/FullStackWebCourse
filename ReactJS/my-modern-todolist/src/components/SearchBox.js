import React, { Component} from 'react'
import classNames from 'classnames'
import close from '../img/close.svg'
import '../css/SearchBox.css'

export default class SearchBox extends Component {
    render() {
        const {onClickAdd,onClick, onKeyUp, onChange, value, isTrigger}=this.props;
        return (
            <div className={classNames('SearchBox',{display:isTrigger})}>
                <div className="close" onClick={onClick}><img src={close} alt="close"/></div>
                <div className="SearchBox-wrap">
                    <div className="SearchBox-content">
                        <div className="SearchBox-box">
                            <input id="input" value={value} placeholder="Type something to trap...." type="text" onChange={onChange} onKeyUp={onKeyUp}/>
                            <div onClick={onClickAdd} className="search">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
