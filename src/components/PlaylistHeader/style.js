import styled from 'styled-components';

export const PlaylistHeaderContainer = styled.div`
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: #696969;
  color: white;
  padding: 0 15px;

  @media (min-width: 500px) {
    font-size: 0.9rem;
  }

  span {
    display: block;
    width: 45px;
    border-radius: 30px;
    text-align: center;
    padding: 3px 0;
    font-size: 0.7rem;
  }
`;
