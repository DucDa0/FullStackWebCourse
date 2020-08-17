import React ,{useState,useEffect} from 'react';
import queryString from 'query-string';
import './App.scss';
// import TodoList from './components/TodoList/TodoList';
// import TodoFrom from './components/TodoForm/TodoFrom';
// import PostList from './components/PostList/PostList';
// import Pagination from './components/Pagination/Pagination';
// import PostFiltersForm from './components/PostFiltersForm/PostFiltersForm';
import Clock from './components/Clock/Clock';
// import ColorBox from './components/Colorbox/ColorBox';

function App() {
  // const [todoList, setTodoList]=useState([
  //   {id: 1, title: 'Hoc React'},
  //   {id: 2, title: 'Hoc CSS'},
  //   {id: 3, title: 'Hoc SCSS'},
  // ]);
  const [postList, setPostList]=useState([]);
  const [pagination, setPagination]=useState(()=>({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  }));
  const [filters, setFilters]=useState({
    _limit: 10,
    _page: 1
  })
  function handlePageChange(newPage){
    setFilters({
      ...filters,
      _page: newPage
    })
  }
  useEffect(()=>{
    async function fetchPostList(){
      try{
        const paramString=queryString.stringify(filters);
        const requestURL=`http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response=await fetch(requestURL);
        const responseJSON=await response.json();
        const {data, pagination}=responseJSON;
        setPostList(data);
        setPagination(pagination);
      }catch(error){
        console.log(error.message);
      }
    };
    fetchPostList();
  },[filters])

  function handleFiltersChange(newFilters){
    setFilters({
      ...filters,
      _psge: 1,
      title_like: newFilters.searchTerm
    })
  }

  // function handleTodoClick(todo){
  //   const index=todoList.findIndex(x=>x.id===todo.id);
  //   if(index<0){
  //     return;
  //   }
  //   const newTodoList=[...todoList];
  //   newTodoList.splice(index,1);
  //   setTodoList(newTodoList);
  // }
  // function handleTodoFormSubmit(formValues){
  //   const newItem={
  //     id: todoList.length+1,
  //     ...formValues
  //   }
  //   const newTodo=[...todoList];
  //   newTodo.push(newItem);
  //   setTodoList(newTodo);
  // }
  return (
    <div className="App">
     {/* <ColorBox/> */}
     {/* <TodoFrom onSubmit={handleTodoFormSubmit}/>
     <TodoList todos={todoList} onTodoClick={handleTodoClick}/> */}
     {/* <PostFiltersForm onSubmit={handleFiltersChange}/>
     <PostList posts={postList}/>
     <Pagination pagination={pagination} onPageChange={handlePageChange}/> */}
     <Clock/>
    </div>
  );
}

export default App;
