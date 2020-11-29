import React from 'react';
import ReactPlayer from 'react-player';
import { VideoContainer } from './style';

const Video = ({ activeVideo }) => (
  <VideoContainer>
    <ReactPlayer width="100%" height="100%" playing controls={true} url={activeVideo.url} />
  </VideoContainer>
);

export default Video;
