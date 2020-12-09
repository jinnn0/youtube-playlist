import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const PlaylistItemsContainer = styled.ul`
  list-style-type: none;
  height: calc(100% - 115px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  font-size: 0.8rem;

  li {
    flex: 1;
    height: 50px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .col-1 {
      width: 15px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .active {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${colors.activeGreen};
      }
    }

    .col-2 {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      font-weight: lighter;
      border-radius: 10px;
      padding-right: 15px;

      span:nth-child(1) {
        width: 20px;
        margin-right: 7px;
        border-right: 3px solid gray;
      }

      span:nth-child(2) {
        font-size: 0.9rem;

        a {
          text-decoration: none;
          color: ${(props) => props.theme.color};
        }
      }

      span:nth-child(3) {
        display: flex;
        justify-content: center;
        margin-left: auto;
        border-radius: 5px;
        width: 45px;
        padding: 5px 0;
        font-size: 0.6rem;
        background: #565656;
        color: #fff;
      }
    }
  }
`;
