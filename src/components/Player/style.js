import styled from 'styled-components';

const PlayerContainer = styled.main`
  width: 100%;
  max-width: 1500px;
  background-color: ${({ theme }) => theme.bgcolor};
  color: ${({ theme }) => theme.color};
  transition: all 0.2s ease-in-out;

  @media (min-width: 1000px) {
    display: flex;
  }
`;

export default PlayerContainer;
