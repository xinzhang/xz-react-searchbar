import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  min-height: 40px;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
  justify-content: space-between;
  font-size: calc(14px + 2vmin);
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
