import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';

const ButtonHeader = ({ title, handleClick }) => {
  const snap = useSnapshot(state);

  return (
    <button
      className='button-header cut-br'
      onClick={handleClick}
    >
      {/* <div className="row">
        <div className="corner-tl"></div>
        <div className="corner-tr"></div>
      </div> */}
      <p className='button-text'>{title}</p>
      {/* <div className='row'>
        <div className="corner-bl"></div>
        <div className="corner-br"></div>
      </div> */}
    </button>
  )
}

export default ButtonHeader