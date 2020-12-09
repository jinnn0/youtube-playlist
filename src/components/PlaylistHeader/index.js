import React from 'react';
import { PlaylistHeaderContainer } from './style';

const PlaylistHeader = ({ activeVideo, totalVideo }) => {
  return (
    <PlaylistHeaderContainer>
      <p>{activeVideo.title}</p>
      <span>
        {activeVideo.num} / {totalVideo}
      </span>
    </PlaylistHeaderContainer>
  );
};

export default PlaylistHeader;
