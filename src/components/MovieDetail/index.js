import React from 'react';
import styled from 'styled-components';

const StyledMovieDetailWrapper = styled.div`
  width: 68vw;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.blackColor};
  padding: 16px;
  @media screen and (max-width: 1020px) {
    display: none;
  }
`;
const StyledMovieIntro = styled.div`
  color: ${(props) => props.theme.whiteColor};
`;

const StyledPoster = styled.div`
  padding: 16px;
  flex: 0 0;
`;

const StyledMovieTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 16px 0px;
`;

const StyledGenre = styled.div`
  font-size: 12px;
  padding: 8px 0px;
`;

const StyledPlot = styled.div`
  font-size: 14px;
  padding: 8px 0px;
`;

const StyledItem = styled.div`
  fontsize: '14px';
  padding: 4px 0px;
`;

const FieldItem = ({ field, text }) => {
  return text ? (
    <StyledItem>
      <b>{field}</b>: {text}
    </StyledItem>
  ) : null;
};

export const MovieDetail = ({ movie }) => {
  return (
    <StyledMovieDetailWrapper>
      {!movie ? (
        <span> Loading ... </span>
      ) : (
        <>
          <StyledPoster>
            <img src={movie.Poster} alt={movie.Title} />
          </StyledPoster>
          <StyledMovieIntro>
            <StyledMovieTitle>{movie.Title}</StyledMovieTitle>
            <StyledGenre>{movie.Genre}</StyledGenre>
            <StyledPlot>{movie.Plot}</StyledPlot>
            <FieldItem field="Language" text={movie.Language} />
            <FieldItem field="Director" text={movie.Director} />
            <FieldItem field="Actors" text={movie.Actors} />
            <FieldItem field="Duration" text={movie.Runtime} />
          </StyledMovieIntro>
        </>
      )}
    </StyledMovieDetailWrapper>
  );
};

export default MovieDetail;
