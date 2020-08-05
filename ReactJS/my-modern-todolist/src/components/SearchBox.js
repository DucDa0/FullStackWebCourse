import React, { Component} from 'react'
// import classNames from 'classnames'
import close from '../img/close.svg'
import '../css/SearchBox.css'

export default class SearchBox extends Component {
    render() {
        const {ok, onClickAdd, onClick, onKeyUp, onChange, value}=this.props;
        return (
            <div className="SearchBox">
                <div className="close" onClick={onClick}><img src={close} alt="close"/></div>
                <div className="SearchBox-wrap">
                    <div className="SearchBox-content">
                        <div className="SearchBox-box">
                            <input ref={ok} id="input" value={value} placeholder="Type something to do...." type="text" onChange={onChange} onKeyUp={onKeyUp}/>
                            <div onClick={onClickAdd} className="search">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 

