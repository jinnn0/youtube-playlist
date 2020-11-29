import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from '../../theme';
import PlayerContainer from './style';
import Video from '../Video';
import Playlist from '../Playlist';

const Player = () => {
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);

  const [nightMode, setNightMode] = useState(false);
  const [activeVideo, setActiveVideo] = useState(videos.playlist[2]);

  const toggleTheme = () => {
    setNightMode(!nightMode);
  };

  return (
    <ThemeProvider theme={nightMode ? themeDark : themeLight}>
      <PlayerContainer>
        <Video activeVideo={activeVideo} />
        <Playlist videos={videos.playlist} activeVideo={activeVideo} toggleTheme={toggleTheme} />
      </PlayerContainer>
    </ThemeProvider>
  );
};

export default Player;
