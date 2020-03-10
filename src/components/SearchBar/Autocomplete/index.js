import React, { useEffect, useState } from 'react';
import debounceRender from 'react-debounce-render';
import styled from 'styled-components';
import rgba from 'styles/helpers/rgba';
import AutocompleteItem from 'components/SearchBar/AutocompleteItem';

const mockedSuggestions = [
  'australia',
  'nicole kidman',
  'morgan freeman',
  'terminiator',
  'aliens',
];

const StyledUL = styled.ul`
  padding: 32px 0 0 16px;
  margin: -50px 20px 0 20px;
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
`;

function Autocomplete({ searchTerm, onClick }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function fetchSuggestions() {
      //const res = await getSearchSuggestions(searchTerm);
      //setSuggestions(get(res, 'data.searchSuggestions', []));
      setTimeout(() => {
        console.log('set suggestions');
        setSuggestions(mockedSuggestions);
      }, 1000);
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
          key={text}
          text={text}
          searchTerm={searchTerm}
          onClick={onClick}
        />
      ))}
    </StyledUL>
  );
}

export default debounceRender(Autocomplete, 700);
