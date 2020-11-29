import styled from 'styled-components';

export const VideoContainer = styled.div`
  height: 300px;

  @media (min-width: 600px) {
    height: 100vh;
    max-height: 500px;
  }

  @media (min-width: 1000px) {
    flex: 0.6;
    height: 600px;
    max-height: 600px;
  }
`;
