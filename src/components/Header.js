import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledTitle = styled.div`
  color: #61dafb;
  padding: 8px;
`;

const { REACT_APP_PRODUCT_NAME } = process.env;

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>{REACT_APP_PRODUCT_NAME}</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
