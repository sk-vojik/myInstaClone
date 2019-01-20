import React from 'react';
import './App.css';
import './Components/SearchBar/SearchBar.css'

import PostsPage from './Components/PostContainer/PostsPage'
import Login from './Components/Login/Login'
import authenticate from './Components/Authentication/authenticate'

import styled from "styled-components"

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
`

function App () {

  return (
    <AppStyled>
      <ConditionalView />
    </AppStyled>
  );
}

const ConditionalView = authenticate(PostsPage)(Login);

export default App;