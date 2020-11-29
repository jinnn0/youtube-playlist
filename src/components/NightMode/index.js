import React from 'react';
import { NightModeContainer } from './style';

const NightMode = ({ toggleTheme }) => {
  return (
    <NightModeContainer>
      <span>Nightmode:</span>
      <input type="checkbox" id="checkbox" onChange={toggleTheme} />
      <label htmlFor="checkbox"></label>
    </NightModeContainer>
  );
};

export default NightMode;
