import React, {Component} from 'react';
import './css/main.css';
// import Header from './components/Header';
// import LoginForm from './components/LoginForm';
// import TabMenu from './components/TabMenu';
// import RecommendedFriends from './components/RecommendedFriends';
// import DynamicClassNames from './components/DynamicClassNames';
import Notification from './components/Notification';

export default class App extends Component{
  render(){
    return (
      <div className="main">
       {/* <Header/>
       <TabMenu/>
       <LoginForm content="Dao Van Duc"/> */}
        {/* <RecommendedFriends/> */}
        {/* <DynamicClassNames/> */}
        <Notification hasUnread={true}/>
      </div>
    );
  }
}

// LoginForm.defaultProps={
//   emailDefault: 'ducdao0906@gmail.com'
// }


