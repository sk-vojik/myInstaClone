import React from "react"

const authenticate = PostsPage => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoggedIn: false
      };
    }
    componentDidMount() {
      if (localStorage.getItem('SK')) {
        this.setState({ isLoggedIn: true });
      }
    }
    render() {
      if (this.state.isLoggedIn) return <PostsPage />;
      return <Login />;
    }
  };

  
export default authenticate;