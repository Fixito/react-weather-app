import React, { useRef } from 'react';
import './Header.css';
import { BsFillGridFill } from 'react-icons/bs';
import { BsBellFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';

const Header = ({ setQuery }) => {
  const inputRef = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;

    if (value) {
      setQuery(value);
    }

    inputRef.current.value = '';
  };

  return (
    <div className='wrapper'>
      <div className='headerLeft'>
        <div className='BsFillGridFillContainer'>
          <BsFillGridFill className='BsFillGridFill' />
        </div>
        <div className='BsBellFillContainer'>
          <BsBellFill className='BsBellFill' />
        </div>
        <div className='locationContainer'>
          <MdLocationOn className='locationIcon' />
          <span className='boldAccent'>CA</span>, US
        </div>
      </div>
      <div className='searchBarContainer'>
        <form className='form' onSubmit={handleForm}>
          <BiSearchAlt2 className='searchIcon' />
          <input
            className='input'
            placeholder={'Search City...'}
            ref={inputRef}
          />
        </form>
      </div>
    </div>
  );
};
export default Header;
