import React, {Component} from 'react';
import './css/main.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import TabMenu from './components/TabMenu';

class App extends Component{
  render(){
    return (
      <div class="main">
       <Header/>
       <TabMenu/>
       <LoginForm content="Dao Van Duc"/>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div class="main">
//      <Header/>
//      <LoginForm content="Dao Van Duc"/>
//     </div>
//   );
// }

export default App;
