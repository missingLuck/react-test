import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import TodoList from "./components/todoList"
import './assets/css/index.css';

import Home from './components/Home'

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <Router>
                  <div>
                      <header className='title'>
                          <Link to='/'>首页</Link>
                          <Link to='/todoList'>待办事项</Link>
                      </header>
                      <Route exact path='/' component={Home}/>
                      <Route path='/todoList' component={TodoList}/>
                  </div>
              </Router>
          </header>
      </div>
  );
}

export default App;
