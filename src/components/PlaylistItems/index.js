import React from 'react';
import { PlaylistItemsContainer } from './style';

const PlaylistItems = ({ videos, activeVideo }) => {
  return (
    <PlaylistItemsContainer>
      {videos.map((video) => (
        <li key={video.title}>
          <div className="col-1">
            {activeVideo.num === video.num ? <span className="active"></span> : null}
          </div>
          <div className="col-2">
            <span>{video.num}</span>
            <span>{video.title}</span>
            <span>{video.duration}</span>
          </div>
        </li>
      ))}
    </PlaylistItemsContainer>
  );
};

export default PlaylistItems;
