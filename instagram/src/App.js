import React from 'react';
import './App.css';
import './Components/SearchBar/SearchBar.css'

import PostsPage from './Components/PostContainer/PostsPage'
import Login from './Components/Login/Login'
import authenticate from './Components/Authentication/authenticate'

function App () {

  return (
    <div className="App">
      <ConditionalView />
    </div>
  );
}

const ConditionalView = authenticate(PostsPage)(Login);

export default App;