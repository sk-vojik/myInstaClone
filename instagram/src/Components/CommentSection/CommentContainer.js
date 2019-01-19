import React from "react"
import InstaComment from "./InstaComment"

import styled from 'styled-components';

const CommentForm = styled.form`
  margin: 0 auto 8px;
  width: 97.4%;
`

const CommentInput = styled.input`
  width: 100%;
  padding: 18px 0 12px 12px;;
  text-align: left;
  border: none;
  border-top: 1px solid lightgray;
  font-size: 1.2rem;
`

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      inputText: "",
    }
  }

  commentHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  addNewComment = event => {
    event.preventDefault();

    this.setState({
      comments: [
        ...this.state.comments, 
        { text: this.state.inputText, username: 'SK'}
      ],
      inputText: ""
    });
  }


  render () {
    return (
      <React.Fragment>

        {this.state.comments.map(comment => {
          return <InstaComment comment={comment} />
        })}
      
        <CommentForm  onSubmit={this.addNewComment}> 
          <CommentInput name="inputText" autoComplete="off" value={this.state.inputText} onChange={this.commentHandler} type="text" placeholder="Add a comment..." />
        </CommentForm>
      </React.Fragment>
    )
  }
    
}

export default CommentContainer