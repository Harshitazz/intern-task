import React from 'react';
import './SearchResult.css';

function SearchResults({ searchResults, query }) {
  return (
    <div className="search-results-container">
      {/* Header section */}
      <div className='hehe'>
        {/* Google logo */}
        <h1 className="google-text2">
          <span className="g">G</span>
          <span className="o1">o</span>
          <span className="o2">o</span>
          <span className="g2">g</span>
          <span className="l">l</span>
          <span className="e">e</span>
        </h1>
        {/* Search query */}
        <div className="query">
          <p className='tag'>{query}</p>
        </div>
        <div style={{flex:'1'}}></div> {/* This div is for spacing */}
      </div>
      
      {/* Search results */}
      <div className="search-results">
        {searchResults.map((result, index) => (
          <div key={index} className="search-result">
            {/* Result title */}
            <a href={result.formattedUrl} target="_blank" rel="noopener noreferrer" className="result-title">
              {result.title}
            </a>
            {/* Result snippet */}
            <p className="result-snippet">{result.snippet}</p>
            {/* Result URL */}
            <p className="result-url">{result.displayLink}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
