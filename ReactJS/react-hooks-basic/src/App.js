import React ,{useState} from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import TodoFrom from './components/TodoForm/TodoFrom';
// import ColorBox from './components/Colorbox/ColorBox';

function App() {
  const [todoList, setTodoList]=useState([
    {id: 1, title: 'Hoc React'},
    {id: 2, title: 'Hoc CSS'},
    {id: 3, title: 'Hoc SCSS'},
  ])
  function handleTodoClick(todo){
    const index=todoList.findIndex(x=>x.id===todo.id);
    if(index<0){
      return;
    }
    const newTodoList=[...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues){
    const newItem={
      id: todoList.length+1,
      ...formValues
    }
    const newTodo=[...todoList];
    newTodo.push(newItem);
    setTodoList(newTodo);
  }
  return (
    <div className="App">
     {/* <ColorBox/> */}
     <TodoFrom onSubmit={handleTodoFormSubmit}/>
     <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
