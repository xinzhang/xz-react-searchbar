import React, { useEffect, useState } from 'react';
import debounceRender from 'react-debounce-render';
import styled from 'styled-components';
import rgba from 'styles/helpers/rgba';
import AutocompleteItem from 'components/SearchBar/AutocompleteItem';
import { searchMovies } from 'api/omdbApi';
import { get } from 'lodash';

const StyledUL = styled.ul`
  padding: 32px 0 0 16px;
  margin-top: -50px;
  width: 50vw;
  min-width: 33vw;
  background-color: ${rgba('#020024', 0.96)};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-top: 0;
  border-right: 0;
  border-radius: 0 4px 4px 4px;
  z-index: 1;
  box-shadow: 6px 6px 8px -6px rgba(2, 0, 36, 0.96);
  color: ${(props) => props.theme.primary};
  font-size: 18px;
  display: absolute;
  left: 0;
  right: 0;
`;

function Autocomplete({ searchTerm, onClick }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function fetchSuggestions() {
      const res = await searchMovies(searchTerm);
      setSuggestions(get(res, 'data.Search', []).map((x) => x.Title));
    }

    if (searchTerm.length >= 3) {
      fetchSuggestions();
    }
  }, [searchTerm]);

  if (searchTerm.length < 3 || suggestions.length === 0) {
    return null;
  }

  return (
    <StyledUL>
      {suggestions.map((text, i) => (
        <AutocompleteItem
          key={i}
          text={text}
          searchTerm={searchTerm}
          onClick={onClick}
        />
      ))}
    </StyledUL>
  );
}

export default debounceRender(Autocomplete, 700);
