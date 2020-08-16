import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps={
    todos:[],
    onTodoClick:null
}

function TodoList({todos, onTodoClick}) {
    
    function handleClick(todo){
        if(onTodoClick){
            onTodoClick(todo);
        }
    }

    return (
        <div>
            <ul className="todo-list">
                {
                    todos.map(todo=>{
                        return <li key={todo.id} onClick={()=>{handleClick(todo)}}>{todo.title}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;