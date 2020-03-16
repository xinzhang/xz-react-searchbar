import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/Card';
import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px auto;
`;

const StyledInfo = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.secondaryText};
`;

export function SearchResults({ movies, currentSearch }) {
  console.log('searchresults', movies.length, currentSearch);
  return (
    <StyledFlex>
      {movies.length === 0 && currentSearch ? (
        <StyledInfo>Can not find movies.</StyledInfo>
      ) : (
        movies.map((item) => {
          return <Card key={item.imdbID} movie={item} />;
        })
      )}
    </StyledFlex>
  );
}

SearchResults.defaultProps = {
  movies: [],
  totalResults: 0,
  currentSearch: '',
};

const mapStateToProps = ({ searchResult, currentSearch }) => ({
  movies: searchResult.Search,
  totalResults: searchResult.totalResults,
  currentSearch: currentSearch.search,
});

export default connect(mapStateToProps)(SearchResults);
