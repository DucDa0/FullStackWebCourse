import React, { Component } from 'react'
import wifi from '../img/wifi.svg'
import battery from '../img/battery.svg'
import menu from '../img/open-menu.svg'
import '../css/TodoList.css'
import NewTodo from './NewTodo'


export default class TodoList extends Component {
    render() {
        return (
            <div className="TodoList">
                <div className="TodoList-wrap">
                    <div className="TodoList-content">
                        <div className="TodoList-head">
                            <div className="signal">
                                <div className="signal-phone">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <div className="signal-wifi"><img width="16" height="16" src={wifi} alt="wifi"/></div>
                            </div>
                            <div className="time"><span className="time-text">9:06 AM</span></div>
                            <div className="battery">
                                <div style={{marginRight: '6px'}} className="battery-text">100%</div>
                                <img  width="20" height="20" src={battery} alt="battery"/>
                            </div>
                        </div>
                        <div className="TodoList-body">
                            <div className="TodoList-body_wrap">
                                <div className="TodoList-body_wrap-head">
                                    <div className="menu"><img width="22" height="22" src={menu} alt="menu"/></div>
                                    <div className="Dailist">DAILIST</div>
                                </div>
                                <div className="TodoList-body_wrap-newTodo">
                                    <div className="upComing">UPCOMING</div>
                                    <div className="newTodo">
                                        <NewTodo/>
                                    </div>
                                </div>
                                <div className="TodoList-body_wrap-todoDone">

                                </div>
                            </div>
                        </div>
                        <div className="TodoList-foot">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
