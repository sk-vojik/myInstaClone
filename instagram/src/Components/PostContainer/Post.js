import React from "react"
import PropTypes from "prop-types"
import CommentContainer from "../CommentSection/CommentContainer";

import styled from 'styled-components';

const PostHeader = styled.div`
  display: flex;
  width: 100%;
  margin: 24px 1%;
`

const UsertThumbnail = styled.img`
  height: 50px;
  border-radius: 30px;
  margin: 0 1%;
`

const PostUsername = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 12px 0 0 2px;
`

const PostPicture = styled.img`
  width: 100%;
  height: 900px;
`

const PostIconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Likes = styled.p`
  font-weight: bold;
  text-align: left;
  margin-left: 1.3%;
`

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.instaPost.likes,
      isLiked: false
    };
  }

  incrementLikes = event => {
    event.preventDefault(); 
    if (this.state.isLiked === false) {
      this.setState({likes: this.state.likes + 1, isLiked: true});
    } else {
      this.setState({likes: this.state.likes - 1, isLiked: false});
    }
  };

  render() {
    return (
      <React.Fragment>
  
        <PostHeader>
          <UsertThumbnail src={this.props.instaPost.thumbnailUrl} alt="thumbnail"/>
          <p>{this.props.instaPost.username}</p>
        </PostHeader>
        <PostPicture src={this.props.instaPost.imageUrl} alt="user post" />
  
        <div className="post-icon-container">
          <i className="far fa-heart" onClick={this.incrementLikes}></i>
          <i className="far fa-comment"></i>
        </div>
        <Likes>{this.state.likes} likes</Likes>
  
        <CommentContainer comments={this.props.instaPost.comments}/>
  
      </React.Fragment>
    )
  }
  
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string
}

export default Post