import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from 'components/Card';
import styled from 'styled-components';
import { getMovieById } from 'api/omdbApi';
import MovieDetail from 'components/MovieDetail';
import useModal from 'use-react-modal';
import CloseButton from 'components/CloseButton';

const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px auto;
`;

const StyledInfo = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.secondaryText};
`;

export const Center = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function SearchResults({ movies, currentSearch }) {
  const { ref, openModal, closeModal, isOpen, Modal } = useModal({
    background: 'rgba(120, 120, 120, 0.5)',
  });
  const [selectedIMDB, setSelectedIMDB] = useState('');
  const [item, setItem] = useState({});

  useEffect(() => {
    const asyncFunc = async () => {
      const { data: movieItem } = await getMovieById(selectedIMDB);
      setItem(movieItem);
    };
    asyncFunc();
  }, [selectedIMDB]);

  return (
    <>
      <StyledFlex>
        {movies.length === 0 && currentSearch ? (
          <StyledInfo>Can not find movies.</StyledInfo>
        ) : (
          movies.map((item) => {
            return (
              <Card
                key={item.imdbID}
                movie={item}
                ref={ref}
                onClick={(e) => {
                  setSelectedIMDB(item.imdbID);
                  openModal(e);
                }}
              />
            );
          })
        )}
      </StyledFlex>
      {isOpen && (
        <Modal>
          <CloseButton onClick={closeModal}></CloseButton>
          <MovieDetail movie={item} />
        </Modal>
      )}
    </>
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
