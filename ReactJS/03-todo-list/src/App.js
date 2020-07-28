import React from 'react';
import './css/style.css';
import './css/Header.css';
import './css/LoginForm.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div class="main">
     <Header/>
     <LoginForm/>
    </div>
  );
}

export default App;
