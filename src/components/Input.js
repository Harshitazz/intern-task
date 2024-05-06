import React from 'react'
import { useNavigate } from 'react-router-dom';

function Input({ query, setQuery, handleFormSubmit }) {
  const navigate = useNavigate();
  const handleChange = (e) => {
    setQuery(e.target.value); // Update query state as the user types
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleFormSubmit(e); // Pass the event object to handleFormSubmit
      redirectToSearchResults(); // Redirect to search results page

    }
  };
  const redirectToSearchResults = () => {
    // Redirect to search results page with the query parameter
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };
  return (
    <form onSubmit={handleFormSubmit}>
          <input
              id="input"
              type="text"
              value={query}
              onChange={handleChange} // Handle input change
              onKeyDown={handleKeyDown} // Handle Enter key press
              placeholder="Search Google or type a URL"
            />
          </form>
  )
}

export default Input
