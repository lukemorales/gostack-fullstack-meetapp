import styled from 'styled-components';

export const Container = styled.div`
  align-self: stretch;
  margin-bottom: 16px;

  label {
    display: block;
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 340px;
    background: rgba(0, 0, 0, 0.1);
    transition: background 180ms ease-in-out;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 12px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    input {
      display: none;
    }

    div {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div + div {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background: rgba(255, 255, 255, 0.2);
      opacity: 0;
      transition: opacity 200ms ease-in-out;

      svg {
        transform: scale(0);
        opacity: 0;
        transition: all 250ms ease-in-out;
      }
    }

    &:hover {
      background: rgba(0, 0, 0, 0.3);

      div + div {
        opacity: 1;

        svg {
          transform: none;
          opacity: 1;
        }
      }
    }
  }
`;
