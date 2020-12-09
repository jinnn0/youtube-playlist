import React from 'react';
import { NightModeContainer } from './style';

const NightMode = ({ nightMode, toggleNightMode }) => {
  return (
    <NightModeContainer>
      <span className="nightMode">{nightMode ? 'Bright Mode' : 'Night Mode'} </span>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" onClick={toggleNightMode}></label>
    </NightModeContainer>
  );
};

export default NightMode;
