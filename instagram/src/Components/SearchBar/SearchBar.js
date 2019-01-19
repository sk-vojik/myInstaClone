import React from "react";
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  margin: 16px 0;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3%;
`

const Separator = styled.div`
  margin-top: 4px;
  font-size: 4rem;
  font-weight: lighter;
`

const InstaLogo = styled.img`
  height: 48px;
  margin-top: 20px;
  margin-left: 10px;
`

const SearchForm = styled.form`
  width: 33%;
  margin: 0 auto;
`

const SearchInput = styled.input`
  margin-top: 16px;
  padding: 6px 20px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
`

const IconContainer = styled.div`
  width: 33%;
  display: flex;
  margin: 16px 3% 0 0;
  justify-content: flex-end;
`

function SearchBar(props) {
  return (
    <SearchContainer>

      <LogoContainer>
        <i className="fab fa-instagram"></i>
        <Separator>|</Separator>
        <InstaLogo src={require("./instaLogo.png")} alt="nope"/>
      </LogoContainer>
      
      <SearchForm onSubmit={props.search}>
        <SearchInput name="searchText" onChange={props.handleSearch} type="text" placeholder="Search" />
      </SearchForm>

      <IconContainer>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </IconContainer>
      
    </SearchContainer>
  )
}

export default SearchBar