import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from 'components/Card';
import styled from 'styled-components';
import { getMovieById } from 'api/omdbApi';
import MovieDetail from 'components/MovieDetail';
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import CloseButton from 'components/CloseButton';
import './styles.css';
import { ReactComponent as CloseIcon } from './close-icon.svg';

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

export const StyledCloseIcon = styled(CloseIcon)`
  width: 20px;
  height: auto;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    border: 'none',
  },
};
export function SearchResults({ movies, currentSearch }) {
  const [selectedIMDB, setSelectedIMDB] = useState('');
  const [item, setItem] = useState({});
  const [isOpen, setIsOpen] = useState(false);

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
                onClick={() => {
                  setSelectedIMDB(item.imdbID);
                  setIsOpen(true);
                }}
              />
            );
          })
        )}
      </StyledFlex>
      <CSSTransition in={isOpen} timeout={500}>
        <Modal isOpen={isOpen} style={customStyles}>
          <StyledCloseIcon onClick={() => setIsOpen(false)} />
          <MovieDetail onClick={() => setIsOpen(false)} movie={item} />
        </Modal>
      </CSSTransition>
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
