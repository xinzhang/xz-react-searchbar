import React from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import rgba from 'styles/helpers/rgba';

const StyledHighlighter = styled(Highlighter)`
  mark {
    color: ${(props) => props.theme.primary};
    background-color: transparent;
  }
`;

const Link = styled.a`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 22px;
  padding-right: 22px;
  transition: background 0.15s ease;
  &:focus,
  &:hover {
    outline: none;
    background: ${(props) => rgba(props.theme.secondary, 0.2)};
  }
`;

export default function AutocompleteItem({ text, searchTerm, onClick }) {
  return (
    <li style={{ listStyle: 'none' }} onClick={() => onClick(text)}>
      <Link>
        <StyledHighlighter
          searchWords={searchTerm.split(' ')}
          autoEscape
          textToHighlight={text}
        />
      </Link>
    </li>
  );
}

AutocompleteItem.propTypes = {
  text: PropTypes.string,
  searchTerm: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

AutocompleteItem.defaultProps = {
  text: '',
  searchTerm: '',
};
