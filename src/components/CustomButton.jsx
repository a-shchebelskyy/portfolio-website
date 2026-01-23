import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';

const CustomButton = ({ title, handleClick }) => {
  const snap = useSnapshot(state);

  return (
    <button
      className='button-main'
      onClick={handleClick}
    >
      <div className="skew-l"/>
      <p className='button-main-text'>{title}</p>
      <div className="skew-r"/>
    </button>
  )
}

export default CustomButton