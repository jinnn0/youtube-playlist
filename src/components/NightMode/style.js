import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const NightModeContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px;

  @media (min-width: 500px) {
    padding: 0 2rem;
  }

  span {
    font-size: 0.8rem;
    margin-right: 10px;

    @media (min-width: 500px) {
      font-size: 1rem;
    }
  }

  input {
    display: none;

    &:checked + label::before {
      left: 50%;
    }
  }

  label {
    width: 30px;
    height: 20px;
    border-radius: 30px;
    position: relative;
    background-color: ${colors.toggleGreen};
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 20px;
      background-color: white;
      transition: all 0.1s ease-in-out;
    }
  }
`;
