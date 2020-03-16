import React from 'react';
import { Box } from 'reflexbox';
import styled from 'styled-components';

const StyledTitle = styled.div`
  padding: 8px;
  margin: 8px;
  color: ${(props) => props.theme.secondaryText};
  font-size: 14px;
`;

export function Card({ movie }) {
  return (
    <Box p={4} m={4} width={[1, 1 / 2, 1 / 4]}>
      <img src={movie.Poster} width="180px" height="250px" alt={movie.Title} />
      <StyledTitle>{movie.Title}</StyledTitle>
    </Box>
  );
}

export default Card;
