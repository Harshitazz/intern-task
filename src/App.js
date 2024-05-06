// App.js
import React, { useState } from 'react';
import SearchResult from './pages/SearchResult';
import Body from './pages/Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { getSearchResults } from './api';

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleFormSubmit = async (event) => {
    if (event) {
      event.preventDefault(); // Prevent default form submission behavior if event is provided
    }
    if (query.trim() !== '') {
      try {
        const results = await fetchSearchResults(query); // Fetch search results from API
        setSearchResults(results); // Set search results in state
        console.log(results)
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };
  
  

  const fetchSearchResults = async (query) => {
    try {
      const API_KEY = 'AIzaSyCENW3qeC3e2tdXwBwlO7MQOCRMKM1HshI';
      const CX = '31acd7d997e5e45a1';
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch search results: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(`Search error: ${data.error.message}`);
      }
      if (!data.items || data.items.length === 0) {
        throw new Error(`No search results found`);
      }
      return data.items; // Return the search results
    } catch (error) {
      console.error('Error fetching search results:', error); // Log the detailed error message
      throw new Error('Failed to fetch search results. Please try again later.');
    }
  };
  
  
  


  return (
    <Router>
      <Routes>

      <Route path="/" element={<Body query={query} setQuery={setQuery} handleFormSubmit={handleFormSubmit} /> } />
      <Route path="/search" element={<SearchResult searchResults={searchResults} query={query} setQuery={setQuery} handleFormSubmit={handleFormSubmit}/> } />
    
      
      </Routes>
    </Router>
  );
}

export default App;


//AIzaSyCENW3qeC3e2tdXwBwlO7MQOCRMKM1HshI