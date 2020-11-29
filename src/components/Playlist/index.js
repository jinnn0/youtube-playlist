import React from 'react';
import NightMode from '../NightMode';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../PlaylistItems';
import { PlaylistContainer } from './style';

const Playlist = ({ videos, activeVideo, toggleTheme }) => {
  return (
    <PlaylistContainer>
      <NightMode toggleTheme={toggleTheme} />
      <PlaylistHeader activeVideo={activeVideo} totalVideos={videos.length} />
      <PlaylistItems videos={videos} activeVideo={activeVideo} />
    </PlaylistContainer>
  );
};

export default Playlist;
