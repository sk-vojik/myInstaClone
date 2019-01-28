import React from "react";
import Post from "./Post"
import styled from "styled-components"

const StyledPostContainer = styled.div`
  width: 900px;
  margin: 200px auto 0;
  border: 1px solid lightgray;
  border-radius: 5px;
`

function PostContainer (props) {
  return (
      <React.Fragment>
        {props.instaDataList.map(instaPost => {
          return (
            <StyledPostContainer>
              <Post instaPost={instaPost} key={instaPost.timestamp}/>              
            </StyledPostContainer>
          )
        })}
      </React.Fragment>

  )
}
export default PostContainer