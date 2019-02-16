import React from 'react';
import styled from "styled-components";

const LoginContainer = styled.div`
  background-color: #F9F9F9;
  height: 100vh;
`

const ContentContainer = styled.div`
  display: flex;
  margin: 200px 15%;
`

const InstaLogo = styled.img`
  height: 48px;
  margin: 24px auto 24px;
  width: 135px;
  text-align: center;
`

const Phones = styled.img`
  margin: 0 5%;
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`

const FormContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  background-color: white;
`

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const LoginInput = styled.input`
  width: 80%;
  margin: 6px auto 12px;
  border-radius: 2px;
  padding: 8px;
  border: 1px solid lightgray;
  background-color: #F9F9F9;
`

const LoginButton = styled.button`
  width: 80%;
  margin: 24px auto 0;
  height: 32px;
  background: #3f95ef;
  color: white;
  opacity: 0.35;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`
const SignUp = styled.div`
  margin: 12px auto;
  width: 100%;
  border: 1px solid lightgray;
  background-color: white;
  text-align: center;
`

const SignUpA = styled.a`
  color: #5197e9;
  cursor: pointer;
`

const LoginText = styled.p`
  font-size: .9rem;
  text-align: center;
`

const AppStores = styled.img`
  margin: 12px auto 0;
`


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    localStorage.setItem(`${this.state.username}`,'user');
  };

  render() {
    return (
      <LoginContainer>

      <ContentContainer>
        <Phones src={require("./login-screen-phones.png")} alt="phones" />

        <RightSide>
          <FormContainer>
            <InstaLogo src={require('../SearchBar/instaLogo.png')} alt="logo" />
            <LoginForm autoComplete="off">
              <LoginInput
                type="text"
                placeholder="User Name"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                required
              />
              <LoginInput
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
              <LoginButton onClick={this.handleLogin}>
                Log In
              </LoginButton>
            </LoginForm>
          </FormContainer>
          <SignUp>
            <LoginText>Don't have an account? <SignUpA>Sign up</SignUpA></LoginText>
          </SignUp>
          <LoginText>Get the app.</LoginText>
          <AppStores src={require('./ios-google-store-icons.png')} alt="app stores" />
        </RightSide>
      
      </ContentContainer>

      </LoginContainer>
    );
  }
}

export default Login;
