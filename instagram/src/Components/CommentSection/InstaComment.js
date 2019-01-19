import React from "react"
import PropTypes from "prop-types"

import styled from 'styled-components'

const CommentContainer = styled.div`
  width: 900px;
  margin: -10px auto;
  text-align: left;
`

const Comment = styled.p`
  font-size: 1.2rem;
  margin-left: 1.3%;
`


function InstaComment(props) {
  return (
    <CommentContainer>
      <Comment><strong>{props.comment.username}</strong> {props.comment.text}</Comment> 
    </CommentContainer>
  )
}

InstaComment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}



export default InstaComment