import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
    // You would typically handle the search here or redirect to a search page
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Sök produkt"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;