import React from 'react';
import Header from 'components/Header';
import Container from 'components/Container';
import SearchBar from 'components/SearchBar';
import SearchResults from 'components/SearchResults';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <SearchBar />
        <SearchResults />
      </Container>
    </div>
  );
}

export default App;
