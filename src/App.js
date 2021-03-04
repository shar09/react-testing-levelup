import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ btnStateInitial, setBtnStateInitial ] = useState(true);
  const [ checkBoxValue, setCheckBoxValue ] = useState(false);
  const [ btnDisabled, setBtnDisabled ] = useState(false);


  useEffect( () => {
    // console.log(btnDisabled);
  }, [btnDisabled]);

  const handleChange = () => {
    setCheckBoxValue(!checkBoxValue);
    setBtnDisabled(!btnDisabled);
  }

  const handleClick = () => {
    setBtnStateInitial(!btnStateInitial);
  }

  return (
    <Fragment>
      {
        btnStateInitial ? (
        <button className={`${!btnDisabled ? 'btn-red': 'btn-disabled'}`}
          onClick={handleClick}
          disabled={btnDisabled}
        >
          Change to blue
        </button>
        ) : (
          <button className={`${!btnDisabled ? 'btn-blue': 'btn-disabled'}`}
            onClick={handleClick} 
            disabled={btnDisabled}
          >
            Change to red
          </button>
        )
      }

      <input type="checkbox" 
        id="disable-button-checkbox"
        value={checkBoxValue} 
        onChange={handleChange} 
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </Fragment>
  );
}

export default App;
