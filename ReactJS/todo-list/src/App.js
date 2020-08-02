import React , {Component} from 'react';
import TodoItem from './components/TodoItem'
import './App.css';
import success from './img/success.svg'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      currentFilter: 'all',
      newItem: '',
      todoItems: [{title: 'Dao Van Duc', isComplete: false},{title: 'Hoang Thai Hoa', isComplete: false},{title: 'Vu Trung Kien', isComplete: false}]
    };
    this.onKeyUp=this.onKeyUp.bind(this);
    this.onChange=this.onChange.bind(this);
    this.onItemSelectALL=this.onItemSelectALL.bind(this);
  }
  onKeyUp(event){
    let text=event.target.value;
    if(event.keyCode===13){
      
      if(!text){
        return;
      }
      text=text.trim();
      if(!text){
        return;
      }
      this.setState({
        newItem: '', 
        todoItems:[
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
    }
  }
  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }
  onItemSelectALL(){
    const {todoItems}=this.state;
    const checkTick=todoItems.reduce((i,sum)=>i+sum.isComplete,0);
    let newTodo;
    if(checkTick===todoItems.length){
      newTodo=todoItems.map(item=>{
          return {title: item.title, isComplete: false}
      });
    }
    else{
        newTodo=todoItems.map(item=>{
        if(item.isComplete){
          return {title: item.title, isComplete: item.isComplete}
        }else{
          return {title: item.title, isComplete: !item.isComplete}
        }
      });
    }
    this.setState({
      todoItems:[
        ...newTodo
      ]
    })
  }
  filterItem(filter){
    return ()=>{
      const status= filter===1? 'active': filter===2 ? 'completed' : 'all'
      this.setState({
        currentFilter: status
      })
    }
    
  }
  onItemClicked(item){
    return ()=>{
      const isComplete=item.isComplete;
      const index=this.state.todoItems.indexOf(item);
      const {todoItems}=this.state;
      this.setState({

        todoItems:[
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete

          },
          ...todoItems.slice(index+1)
        ]
      })
    }
  }
  render(){
    const{todoItems, newItem, currentFilter}=this.state;
    const itemLeftAmount=todoItems.reduce((i,sum)=>i+!sum.isComplete,0);
    let filterTodo;
    if(currentFilter==='all'){
      filterTodo=todoItems;
    }else if(currentFilter==='active'){
      filterTodo=todoItems.filter(item=>!item.isComplete);
    }else{
      filterTodo=todoItems.filter(item=>item.isComplete);
    }
    if(filterTodo.length){
      return (
        <div className="App">
          <div className="header">
            <img width="32" height="32" onClick={this.onItemSelectALL} src={success} alt="sss"/>
            <input value={newItem} placeholder="Type here..." type="text" name="input" id="input" onChange={this.onChange} onKeyUp={this.onKeyUp}/>
          </div>
          {
            filterTodo.length && filterTodo.map((item,index)=>{
              return <TodoItem key={index} item={item} onClick={this.onItemClicked(item)}/>
            })
          }
          <div className="footer">
            <div className="itemsDone">
              {itemLeftAmount} items left
            </div>
            <div className="filter">
              <div onClick={this.filterItem(0)} className="filter-item">All</div>
              <div onClick={this.filterItem(1)} className="filter-item">Active</div>
              <div onClick={this.filterItem(2)} className="filter-item">Completed</div>
            </div>
          </div>
        </div>
      );
    }else{
      return(
        <div className="App">Empty!</div>
      )
    }
   
  }
  
}
