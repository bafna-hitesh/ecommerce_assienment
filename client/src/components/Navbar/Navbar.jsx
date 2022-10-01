import React, { useState, useEffect } from 'react';
import './Navbar.css';
import axios from 'axios'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([])
 
  useEffect(() => {
    if(searchTerm.length) {
      const getData = setTimeout(async() => {
        const { data } = await axios.get(`http://localhost:8000/api/search`, {
        params: {
          title: searchTerm,
        },
      })
      console.log(data);
      setSearchResults(data)
      }, 200)
      return () => clearTimeout(getData)
    }else{
      setSearchResults([])
    }
}, [searchTerm])

  return (
    <div className='nav-container'>
      <div className='nav-section' >
        <div className='search-bar '>
          <button className='search-bar-btn link-no-style' type='submit'>
            <i className='fa fa-search'></i>
          </button>
          <input
            className='search-bar-input'
            type='text'
            placeholder='Type to search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      {searchResults.length > 0 && (
    <ul className="result-container">
      {searchResults.map((item, i) => {
        return (
          <li
            key={i}
            className="result-list"
          >
            <div className='result-details'>
            <img 
              src={`${item.image}` }
              className="result-image"   
            />
           <div className='result-name'> {item.name}</div>
            </div>
        
          </li>
        );
      })}
    </ul>
    )}
      </div>
    </div>
  );
};

export default Navbar;
