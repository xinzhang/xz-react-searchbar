import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 300px;
  height: 400px;
`;

const StyledTitle = styled.div`
  padding: 8px;
  margin: 8px;
  color: ${(props) => props.theme.secondaryText};
  font-size: 14px;
`;

export function Card({ movie, imdbID, onClick }) {
  const defaultUrl = 'https://via.placeholder.com/180/250';

  return (
    <StyledBox onClick={(e) => onClick(e)}>
      <img
        src={movie.Poster === 'N/A' ? defaultUrl : movie.Poster}
        width="180px"
        height="250px"
        alt={movie.Title}
      />
      <StyledTitle>{movie.Title}</StyledTitle>
    </StyledBox>
  );
}

export default Card;
