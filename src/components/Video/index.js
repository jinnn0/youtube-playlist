import React from 'react';
import ReactPlayer from 'react-player';
import { VideoContainer } from './style';

const Video = ({ activeVideo, autoPlay, endCallback }) => {
  return (
    <VideoContainer>
      <ReactPlayer
        className="react-player"
        width="100%"
        height="100%"
        playing={autoPlay}
        controls={true}
        url={activeVideo.url}
        onEnded={endCallback}
      />
    </VideoContainer>
  );
};

export default Video;
