import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  maxwidth: '1440px';
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  marginleft: 'auto';
  marginright: 'auto';
  background-color: rgba(0, 0, 0, 0.3);
  font-family: ${(props) => props.theme.bodyFontFamily};
  font-size: ${(props) => props.theme.bodyFontSize};
  padding: 10px;
`;

export default Container;
