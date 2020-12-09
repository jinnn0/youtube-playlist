import React from 'react';
import NightMode from '../NightMode';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../PlaylistItems';
import { PlaylistContainer } from './style';

const Playlist = ({ nightMode, toggleNightMode, activeVideo, totalVideo, videos }) => {
  return (
    <PlaylistContainer>
      <NightMode nightMode={nightMode} toggleNightMode={toggleNightMode} />
      <PlaylistHeader activeVideo={activeVideo} totalVideo={totalVideo} />
      <PlaylistItems videos={videos} activeVideo={activeVideo} />
    </PlaylistContainer>
  );
};

export default Playlist;
