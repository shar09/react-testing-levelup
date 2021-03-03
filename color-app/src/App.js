import React, { Fragment, useState } from 'react';
import './App.css';

function App() {

  const [ btnStateInitial, setBtnStateInitial ] = useState(true)

  const handleClick = () => {
    setBtnStateInitial(!btnStateInitial);
  }

  return (
    <Fragment>
      {
        btnStateInitial ? (
        <button style={{ backgroundColor: 'red' }} className="color-btn" onClick={handleClick}>
          Change to blue
        </button>
        ) : (
          <button style={{ backgroundColor: 'blue' }} className="btn-blue" onClick={handleClick}>
            Change to red
          </button>
        )
      }
    </Fragment>

  );
}

export default App;
