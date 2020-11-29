import React from 'react';
import { PlaylistHeaderContainer } from './style';

const PlaylistHeader = ({ activeVideo, totalVideos }) => {
  return (
    <PlaylistHeaderContainer>
      <p>{activeVideo.title}</p>
      <span>
        {activeVideo.num} / {totalVideos}
      </span>
    </PlaylistHeaderContainer>
  );
};

export default PlaylistHeader;
