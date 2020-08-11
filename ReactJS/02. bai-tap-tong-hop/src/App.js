import React, {Component} from 'react';
import './css/main.css';
// import Header from './components/Header';
// import LoginForm from './components/LoginForm';
// import TabMenu from './components/TabMenu';
// import RecommendedFriends from './components/RecommendedFriends';
// import DynamicClassNames from './components/DynamicClassNames';
// import Notification from './components/Notification';
// import SearchBox from './components/SearchBox';
// import Modal from './components/Modal';
// import BookList from './components/BookList';
// import List from './components/RenderProps/List'
// import Counter from './components/RenderProps/Counter'
// import ImageEffects from './components/HighOrderComponents/ImageEffects';
// import ImageWrap from './components/HighOrderComponents/ImageWrap';
import NumberProvider from './components/ContextAPI/Provider/NumberProvider';
import NumberContexts from './components/ContextAPI/Contexts/NumberContexts';

// const FirstImage=ImageEffects(ImageWrap);
export default class App extends Component{
  constructor(){
    super();
    this.state={
      trigger: false,
      error: null,
      isLoaded: false,
      books: []
    };
  }
  componentDidMount(){
    fetch("https://demoexpress200.herokuapp.com/api/books?fbclid=IwAR0IC1IHPxpKQlW8zJ2URaq9tfG6sAWxqrZreqz3HxTiDsY9p3ooeS6ZsKA")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            books: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  isClick() {
    return ()=>{
      const {trigger}=this.state;
      this.setState({
        trigger: !trigger
      })
    }
  }
  render(){
    // const {trigger}=this.state;
    // const { books } = this.state;
    // const data=['A','B','C'];
    return (
      <NumberProvider>
        <div className="main">
        {/* <Header/>
        <TabMenu/>
        <LoginForm content="Dao Van Duc"/> */}
          {/* <RecommendedFriends/> */}
          {/* <DynamicClassNames/> */}
          {/* <Notification hasUnread={true}/> */}
          {/* <SearchBox onFocused={this.isClick()} isFocused={trigger}/> */}
          {/* <button onClick={this.isClick()}>Open modal</button>
          {
            trigger && <Modal onClick={this.isClick()}>
                              <h2 className="title">This is my life</h2>
                              <p className="article">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                            
                      </Modal>
          } */}
          {/* <div className="main-wrap">
              <div className="main-content">
                  {
                    books.map(item=>{
                      return  <BookList title={item.title} description={item.description} bookImgUrl={item.imageBookurl}/>
                    })
                  }
              </div>
          </div> */}
          {/* <List data={data} render={item=><div>+ {item}</div>}/>
          <List data={data} render={item=><div>- {item}</div>}/>
          <List data={data} render={item=><div>* {item}</div>}/>
          <List data={data} render={item=><div>/ {item}</div>}/>
          <Counter>
              {({count})=><h1>{count}</h1>}
          </Counter> */}
          {/* <FirstImage src="https://picsum.photos/500/300/"/> */}
          <NumberContexts.Consumer>
            {
              ({number, updateNumber})=>(
              <div>
                  <h1>{number}</h1>
                  <button onClick={updateNumber}>Update number</button>
              </div>
            
              )
            }
          </NumberContexts.Consumer>
        </div>
      </NumberProvider>
    );
  }
}

// LoginForm.defaultProps={
//   emailDefault: 'ducdao0906@gmail.com'
// }


