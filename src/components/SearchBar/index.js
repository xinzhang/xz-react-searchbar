import React from 'react';
import styled from 'styled-components';
import screen from 'styles/helpers/media';
import { ReactComponent as Icon } from './icons/search-icon.svg';
import { fetchSearchMovies } from 'store/actions';
import { connect } from 'react-redux';

import AutoComplete from './Autocomplete';

const mobileHeight = '55px';
const desktopHeight = '60px';

const Wrapper = styled.div`
  width: 80vw;
  border-radius: 30px;
  border: solid 1px;
  padding: 0px 20px;
  margin: 20px;
  overflow: hidden;
  position: relative;
  transition: border-color ease 0.2s;
  display: flex;
  align-items: center;
  z-index: 2;
  background: ${(props) => props.theme.backgroundPrimary};
  height: ${desktopHeight};
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  transition: transform 0.2s ease;
  transform: translateX(${({ focused }) => (focused ? '-45px' : 0)});
`;

const StyledInput = styled.input`
  outline: none;
  apperance: none;
  background: none;
  margin-left: 10px;
  border: 0;
  font-size: 18px;
  width: 100%;
  color: #fff;
  opacity: 0.8;
  &::placeholder {
    opacity: 0.5;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;

const Submit = styled.button`
  appearance: none;
  background: none;
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1.2px;
  padding: 10px;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.25s ease;

  display: none;
  ${screen.md} {
    display: block;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }

  &[disabled] {
    opacity: 0;
    cursor: not-allowed;
  }
`;

const SearchIcon = styled(Icon)`
  & path {
    fill: ${(props) => props.theme.whiteColor};
  }
  width: 30px;
`;

const SEARCH_INPUT_DESCRIPTION = 'Search for an actor or movie';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      showDropdown: false,
      searchValue: '',
    };
  }

  handleAutoCompleteClick = (term) => {
    this.setState({
      showDropdown: false,
      searchValue: term,
    });
  };

  handleSubmitClick = () => {
    this.setState({ showDropdown: false });
    this.props.dispatch(fetchSearchMovies(this.state.searchValue));
  };

  handleKeyDown = (e) => {
    console.log('keyup', e);
    if (e.key === 'Enter') {
      this.handleSubmitClick();
    }
  };

  render() {
    const { focused, showDropdown, searchValue } = this.state;

    return (
      <>
        <Wrapper>
          <Slide focused={focused}>
            <SearchIcon />
            <StyledInput
              value={searchValue}
              type="search"
              placeholder={SEARCH_INPUT_DESCRIPTION}
              onFocus={() =>
                this.setState({
                  focused: true,
                })
              }
              onBlur={() => this.setState({ focused: false })}
              onChange={(e) =>
                this.setState({
                  searchValue: e.target.value,
                  showDropdown: true,
                })
              }
            />
          </Slide>
          <Submit
            type="submit"
            disabled={!searchValue}
            onClick={this.handleSubmitClick}
          >
            Submit
          </Submit>
        </Wrapper>
        {showDropdown && (
          <AutoComplete
            searchTerm={searchValue}
            onClick={this.handleAutoCompleteClick}
          />
        )}
      </>
    );
  }
}

export default connect()(SearchBar);
