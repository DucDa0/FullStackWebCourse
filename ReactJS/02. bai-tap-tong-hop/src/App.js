import React, {Component} from 'react';
import './css/main.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import TabMenu from './components/TabMenu';
import RecommendedFriends from './components/RecommendedFriends';

class App extends Component{
  render(){
    return (
      <div class="main">
       {/* <Header/>
       <TabMenu/>
       <LoginForm content="Dao Van Duc"/> */}
        <RecommendedFriends/>
      </div>
    );
  }
}

// LoginForm.defaultProps={
//   emailDefault: 'ducdao0906@gmail.com'
// }

export default App;
