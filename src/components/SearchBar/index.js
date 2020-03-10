import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px 20px;
  margin: 20px;
  border-radius: 1000px;
  height: 20px;
  width: 80vw;
  align-self: center;
  font-size: 1.8em;
`;

const SearchBar = () => {
  return <StyledInput placeholder="enter the title..." />;
};

export default SearchBar;
