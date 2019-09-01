import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  padding: 32px;
`;

export const Content = styled.div`
  background: #fff;
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 40px;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 10px 45px rgba(255, 255, 255, 0.17);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    position: relative;
    z-index: 2;

    input {
      width: 100%;
      background: rgba(63, 39, 68, 0.07);
      border-radius: 4px;
      border: 2px solid transparent;
      height: 48px;
      padding: 8px 12px;
      color: #333;
      transition: border 180ms ease-in-out;

      &:focus {
        border: 1px solid #e65175;
      }

      &::placeholder {
        color: #777;
      }

      & + input {
        margin-top: 12px;
      }
    }

    span {
      display: block;
      color: #e65175;
      margin: 5px 0 0;
      font-weight: bold;
      text-align: left;
    }

    button {
      margin: 28px 0 0;
      height: 48px;
      background: #e5556e;
      font-weight: bold;
      color: #fff;

      border-radius: 4px;
      box-shadow: 0;
      transition: all 180ms ease-in-out;

      &:hover {
        background: ${lighten(0.03, '#E5556E')};
        transform: scale(1.01);
        box-shadow: 0 4px 12px rgba(183, 31, 57, 0.27);
      }

      &:active {
        background: ${darken(0.03, '#E5556E')};
      }

      &:disabled {
        cursor: wait;
        opacity: 0.7;
      }
    }

    p {
      margin-top: 55px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      cursor: default;
      color: #777;
    }

    a {
      display: inline-block;
      padding: 8px 20px;
      color: #e5556e;
      font-size: 16px;
      font-weight: bold;
      transition: all 180ms ease-in-out;

      &:hover {
        color: ${lighten(0.03, '#e5556e')};
      }
    }
  }
`;
