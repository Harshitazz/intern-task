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
import Input from "../components/Input";

function Body({ query, setQuery, handleFormSubmit }) {


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
          <Input query={query} setQuery={setQuery} handleFormSubmit={handleFormSubmit}/>
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
