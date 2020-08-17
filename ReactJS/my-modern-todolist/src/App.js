import React from "react";
import shortid from 'shortid';
import wifi from "./img/wifi.svg";
import battery from "./img/battery.svg";
import menu from "./img/open-menu.svg";
import add from "./img/plus.svg";
import NewTodo from "./components/NewTodo";
import SearchBox from "./components/SearchBox";
import EmptyList from "./components/EmptyList";
import classNames from "classnames";
import "./css/TodoList.css";
const storageKey = "todoItems";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      trigger: false,
      newItem: "",
      data: []
    };
    this.inputElement = React.createRef();
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.onClickAdd = this.onClickAdd.bind(this);// sử dụng arrow function để thay thế
  }
  componentDidMount(){
    const dataString = localStorage.getItem(storageKey);
    if (dataString) {
      this.setState({
        data: JSON.parse(dataString)
      })
    }
  }
  componentDidUpdate() {
    const { data, trigger } = this.state;
    const filterTodoByNotDone = data.filter(item => !item.isComplete);
    if (trigger) {
      this.inputElement.current.focus();
    }
    if(!filterTodoByNotDone.length){
      localStorage.removeItem(storageKey);
    }
  }
  // shouldComponentUpdate(nP,nS){
  //   if(this.state.trigger===nS.trigger){
  //     return false;
  //   }
  //   return true;
  // }
  onClickAdd = () => {
    let { newItem } = this.state;
    let dataString = JSON.parse(localStorage.getItem(storageKey));
    if(!dataString){
      dataString=[];
    }
    newItem = newItem.trim();
    if (!newItem) {
      return;
    }
    dataString.push({id: shortid.generate(),title: newItem, isComplete: false });
    localStorage.setItem(storageKey, JSON.stringify(dataString));
    this.setState({
      newItem: "",
      data: [
        ...this.state.data,
        {id: shortid.generate(),title: newItem, isComplete: false }
      ]
    });

  };
  onKeyUp(event) {
    if (event.keyCode === 13) {
      let { newItem } = this.state;
      let dataString = JSON.parse(localStorage.getItem(storageKey));
      if(!dataString){
        dataString=[];
      }
      newItem = newItem.trim();
      if (!newItem) {
        return;
      }
      dataString.push({id: shortid.generate(),title: newItem, isComplete: false });
      localStorage.setItem(storageKey, JSON.stringify(dataString));
      this.setState({
        newItem: "",
        data: [
          ...this.state.data,
          {id: shortid.generate(),title: newItem, isComplete: false }
        ]
      });
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }
  isClick() {
    return () => {
      const { trigger } = this.state;
      this.setState({
        trigger: !trigger
      });
    };
  }
  onItemClicked(item) {
    return () => {
      const dataString = JSON.parse(localStorage.getItem(storageKey));
      const isComplete = item.isComplete;
      const index = this.state.data.indexOf(item);
      dataString[index].isComplete = !isComplete;
      localStorage.setItem(storageKey, JSON.stringify(dataString));
      this.setState({
        trigger: false,
        data:[
          ...this.state.data.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...this.state.data.slice(index+1)
        ]
      });
    };
  }
  render() {
    const {data, trigger, newItem } = this.state;
    const filterTodoByDone = data.filter(item => item.isComplete);
    const filterTodoByNotDone = data.filter(item => !item.isComplete);
    return (
      <div className="TodoList">
        <div className="TodoList-wrap">
          <div className="TodoList-content">
            <div className="TodoList-head">
              <div className="signal">
                <div className="signal-phone">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
                <div className="signal-wifi">
                  <img width="16" height="16" src={wifi} alt="wifi" />
                </div>
              </div>
              <div className="time">
                <span className="time-text">9:06 AM</span>
              </div>
              <div className="battery">
                <div style={{ marginRight: "6px" }} className="battery-text">
                  100%
                </div>
                <img width="20" height="20" src={battery} alt="battery" />
              </div>
            </div>
            <div className="TodoList-body">
              <div className="TodoList-body_wrap">
                <div className="TodoList-body_wrap-head">
                  <div className="menu">
                    <img width="22" height="22" src={menu} alt="menu" />
                  </div>
                  <div className="Dailist">DAILIST</div>
                </div>
                <div className="TodoList-body_wrap-newTodo">
                  {trigger && (
                    <SearchBox
                      ok={this.inputElement}
                      value={newItem}
                      onClickAdd={this.onClickAdd}
                      onClick={this.isClick()}
                      onKeyUp={this.onKeyUp}
                      onChange={this.onChange}
                    />
                  )}
                  <div
                    className={classNames("upComing", {
                      isEmpty: !filterTodoByNotDone.length
                    })}
                  >
                    UPCOMING
                  </div>
                  <div
                    className={classNames("newTodo", {
                      isEmpty: !filterTodoByNotDone.length
                    })}
                  >
                    {filterTodoByNotDone.map((item, index) => {
                      return (
                        <NewTodo
                          index={index}
                          item={item}
                          key={item.id}
                          onClick={this.onItemClicked(item)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div
                  className={classNames("TodoList-body_wrap-todoDone", {
                    isEmpty: !filterTodoByNotDone.length
                  })}
                >
                  <div className="finish">FINISHED</div>
                  <div className="completedTodo">
                    {filterTodoByDone.map((item, index) => {
                      return (
                        <NewTodo
                          index={index}
                          item={item}
                          key={item.id}
                          onClick={this.onItemClicked(item)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {!filterTodoByNotDone.length && <EmptyList />}
            <div className="TodoList-foot">
              <div className="TodoList-foot-wrap">
                <div onClick={this.isClick()} className="TodoList-foot-add">
                  <img src={add} alt="add" width="32" height="32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
