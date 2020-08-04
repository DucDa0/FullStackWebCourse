import React, {Component} from 'react';
import './css/main.css';
// import Header from './components/Header';
// import LoginForm from './components/LoginForm';
// import TabMenu from './components/TabMenu';
import RecommendedFriends from './components/RecommendedFriends';
// import DynamicClassNames from './components/DynamicClassNames';
// import Notification from './components/Notification';
// import SearchBox from './components/SearchBox'
// import Modal from './components/Modal'

export default class App extends Component{
  constructor(){
    super();
    this.state={
      trigger: false
    };
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
    return (
      <div className="main">
       {/* <Header/>
       <TabMenu/>
       <LoginForm content="Dao Van Duc"/> */}
        <RecommendedFriends/>
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
      </div>
    );
  }
}

// LoginForm.defaultProps={
//   emailDefault: 'ducdao0906@gmail.com'
// }


