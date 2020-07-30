import React, {Component} from 'react';
import './css/main.css';
// import Header from './components/Header';
// import LoginForm from './components/LoginForm';
// import TabMenu from './components/TabMenu';
// import RecommendedFriends from './components/RecommendedFriends';
// import DynamicClassNames from './components/DynamicClassNames';
// import Notification from './components/Notification';
// import SearchBox from './components/SearchBox'
import Modal from './components/Modal'

export default class App extends Component{
  constructor(){
    super();
    this.state={
      trigger: false
    };
    this.isClick=this.isClick.bind(this);
  }
  isClick() {
    this.setState({
      trigger: true
    })
  }
  render(){
    return (
      <div className="main">
       {/* <Header/>
       <TabMenu/>
       <LoginForm content="Dao Van Duc"/> */}
        {/* <RecommendedFriends/> */}
        {/* <DynamicClassNames/> */}
        {/* <Notification hasUnread={true}/> */}
        {/* <SearchBox/> */}
        <button>Open modal</button>
        <Modal onClick={this.isClick}/>
      </div>
    );
  }
}

// LoginForm.defaultProps={
//   emailDefault: 'ducdao0906@gmail.com'
// }


