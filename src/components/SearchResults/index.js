import React from 'react';
import { connect } from 'react-redux';
import { Flex } from 'reflexbox';
import Card from 'components/Card';

export function SearchResults({ movies }) {
  console.log('searchresults', movies);
  return (
    <Flex flexWrap="wrap" mx={-2}>
      {movies &&
        movies.map((item) => {
          return <Card key={item.imdbID} movie={item} />;
        })}
    </Flex>
  );
}

SearchResults.defaultProps = {
  movies: [],
  totalResults: 0,
};

const mapStateToProps = ({ searchResult }) => ({
  movies: searchResult.Search,
  totalResults: searchResult.totalResults,
});

export default connect(mapStateToProps)(SearchResults);
