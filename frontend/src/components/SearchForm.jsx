import React from 'react';

function SearchForm({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Buscar por bloco, transação ou hash"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchForm;