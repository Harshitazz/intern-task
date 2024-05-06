import React from "react";
import "./Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import {
  faMagnifyingGlass,
  faMicrophone,
  faCamera,
  faFlask,
  faGrip,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

function Body({ query, setQuery, handleFormSubmit }) {
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
    <>
    <div>
      <ul className='navul' >
        <li className="nav-li">Gmail</li>
        <li className="nav-li">Images</li>

        <li className="nav-li nav-img"><FontAwesomeIcon icon={faFlask} size="xl"/></li>
        <li className="nav-li nav-img"><FontAwesomeIcon icon={faGrip} size="xl" /></li>
        <li className="nav-li nav-img"><FontAwesomeIcon icon={faCircle} size="2xl"/></li>
      </ul>
    </div>
    <div className="container">
      <div>
        <div className="google-text">
          <span className="g">G</span>
          <span className="o1">o</span>
          <span className="o2">o</span>
          <span className="g2">g</span>
          <span className="l">l</span>
          <span className="e">e</span>
        </div>
      </div>
      <div id="inputWrapper">
        <div className="search-bar">
          <div className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
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
          <div className="icons">
            <FontAwesomeIcon icon={faMicrophone} style={{ color: "#34a853" }} />
            <FontAwesomeIcon icon={faCamera} style={{ color: "#4285f4" }} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Body;
