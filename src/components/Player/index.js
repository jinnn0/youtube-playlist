import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from '../../theme';
import PlayerContainer from './style';
import Video from '../Video';
import Playlist from '../Playlist';

const Player = (props) => {
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);
  const localStorageState = JSON.parse(localStorage.getItem(`playlist`));

  const initialState = {
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    autoPlay: true,
    nightMode: true
  };

  const [state, setState] = useState(initialState || localStorageState);

  useEffect(() => {
    localStorage.setItem('playlist', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const videoID = props.match.params.activeVideo;

    if (videoID) {
      /*
      update activeVideo state when
        - video ends
        - PlaylistItem is clicked
       */
      const currentIndex = state.videos.findIndex((video) => video.id === videoID);
      setState((prev) => ({ ...prev, activeVideo: state.videos[currentIndex] }));
    } else {
      // set the first video'id to '/:activevideo'
      props.history.push(`/${state.activeVideo.id}`);
    }
  }, [state.videos, state.activeVideo, props.match.params, props.history]);

  // get the next video when current video ends
  const endCallback = () => {
    const videoID = props.match.params.activeVideo;
    const currentIndex = state.videos.findIndex((video) => video.id === videoID);
    const nextIndex = currentIndex === state.videos.length - 1 ? 0 : currentIndex + 1;

    props.history.push(`/${state.videos[nextIndex].id}`);
  };

  const toggleNightMode = () => {
    setState((prev) => ({ ...prev, nightMode: !state.nightMode }));
  };

  return (
    <ThemeProvider theme={state.nightMode ? themeDark : themeLight}>
      <PlayerContainer>
        <Video activeVideo={state.activeVideo} autoPlay={state.autoPlay} endCallback={endCallback} />
        <Playlist
          nightMode={state.nightMode}
          toggleNightMode={toggleNightMode}
          activeVideo={state.activeVideo}
          totalVideo={state.videos.length}
          videos={state.videos}
        />
      </PlayerContainer>
    </ThemeProvider>
  );
};

export default Player;
