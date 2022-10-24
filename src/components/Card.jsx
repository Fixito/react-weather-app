import { useEffect, useRef, useState } from 'react';
import './Card.css';
import { FaSun } from 'react-icons/fa';
import { BsSnow2 } from 'react-icons/bs';

const fahrenheitToCelsius = (f) => {
  return Math.round(((f - 32) * 5) / 9);
};

const Card = ({ name, temp }) => {
  const [temperature, setTemperature] = useState(0);
  const inputRef = useRef(null);

  const fahrenheit = fahrenheitToCelsius(temperature);

  useEffect(() => setTemperature(temp), [temp]);

  const handleForm = (e) => {
    e.preventDefault();
    const value = Number(inputRef.current.value);

    if (value) {
      setTemperature(value);
    } else {
      console.log('please enter value');
    }

    inputRef.current.value = '';
  };

  return (
    <div className='card'>
      <div className='card-header'>
        <span className='card-day'>Monday</span>
        <span className='card-time'>12:00 PM</span>
      </div>
      <div className='card-body'>
        <div className='card-city'>{name}</div>
        <div className={`card-content ${fahrenheit > 70 ? 'red' : 'green'}`}>
          <span className='card-temperature'>{fahrenheit}°C</span>
          <div className='card-logo'>
            {fahrenheit > 70 ? <FaSun /> : <BsSnow2 />}
          </div>
        </div>
        <form className='card-form' onSubmit={handleForm}>
          <input
            type='text'
            placeholder='Enter Fahrenheit value to  convert to Celsius...'
            className='card-input'
            ref={inputRef}
          />
          <button className='card-btn' type='submit'>
            convert
          </button>
        </form>
      </div>
    </div>
  );
};

export default Card;
