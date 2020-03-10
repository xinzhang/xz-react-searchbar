import React from 'react';
import styled from 'styled-components';
import screen from 'styles/helpers/media';
import { ReactComponent as Icon } from './icons/search-icon.svg';

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
  background: ${(props) => props.theme.backgroundPrimary};
  height: ${mobileHeight};
  ${screen.md} {
    height: ${desktopHeight};
  }
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
  &::placeholder {
    opacity: 0.5;
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
    };
  }

  render() {
    const { focused } = this.state;
    return (
      <Wrapper>
        <Slide focused={focused}>
          <SearchIcon />
          <StyledInput
            placeholder={SEARCH_INPUT_DESCRIPTION}
            onFocus={() =>
              this.setState({
                focused: true,
              })
            }
            onBlur={() => this.setState({ focused: false })}
          />
        </Slide>
      </Wrapper>
    );
  }
}

export default SearchBar;
