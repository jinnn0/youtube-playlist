import React from 'react';
import { PlaylistItemsContainer } from './style';
import { Link } from 'react-router-dom';

const PlaylistItem = ({ video, activeVideo }) => {
  return (
    <li key={video.title}>
      <div className="col-1">{activeVideo.num === video.num ? <span className="active"></span> : null}</div>
      <div className="col-2">
        <span>{video.num}</span>
        <span>
          <Link to={`/${video.id}`}>{video.title}</Link>
        </span>
        <span>{video.duration}</span>
      </div>
    </li>
  );
};

const PlaylistItems = ({ videos, activeVideo }) => {
  return (
    <PlaylistItemsContainer>
      {videos.map((video) => (
        <PlaylistItem key={video.title} video={video} activeVideo={activeVideo} />
      ))}
    </PlaylistItemsContainer>
  );
};

export default PlaylistItems;
