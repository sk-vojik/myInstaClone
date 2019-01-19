import React, { Component } from 'react';
import dummyData from './dummy-data'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from '../PostContainer/PostContainer'
import styled from 'styled-components'

const App = styled.div`
  text-align: center;
`


class PostsPage extends Component {
  constructor () {
    super();
    this.state = {
      dataList: [],
      searchText: '',
      searchPosts: []
    };
  }

  componentDidMount() {
    this.setState({ dataList: dummyData });
  }

  handleSearch = ev => {
    this.setState({
      searchText: ev.target.value
    });
  };

  searchUsers = ev => {
    ev.preventDefault();
    this.setState({
      searchPosts: this.state.dataList.filter((userSearch) => {
      return userSearch.username.includes(this.state.searchText);
      })
    });
  }

  render() {
    return (
      <App>
        <SearchBar search={this.searchUsers} handleSearch={this.handleSearch}/>
        <PostContainer instaDataList={this.state.searchPosts.length > 0 ? this.state.searchPosts : this.state.dataList}/>
      </App>
    );
  }
}

export default PostsPage;