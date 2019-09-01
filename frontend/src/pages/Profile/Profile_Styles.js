import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 30px auto;
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 48px;
      padding: 0 15px;
      color: #515366;
      margin: 0 0 10px;
      transition: box-shadow 0.2s;

      &:focus {
        box-shadow: 0 0 3px rgba(93, 97, 164, 0.35);
      }

      &::placeholder {
        color: #999;
      }
    }

    span {
      display: block;
      color: #e65175;
      margin: -5px 0 10px;
      font-weight: bold;
      text-align: left;
    }

    hr {
      border: 0;
      margin: 25px 0 0;
    }

    button {
      margin: 16px 0 0;
      height: 48px;
      background: #4dbaf9;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: all 180ms ease-in-out;

      &:hover {
        background: ${lighten(0.03, '#4dbaf9')};
        transform: scale(1.01);
      }

      &:active {
        background: ${darken(0.15, '#4dbaf9')};
        transform: scale(0.99);
      }
    }
  }

  > button {
    background: none;
    color: #fff;
    font-weight: bold;
    border: 0;
    display: flex;
    align-items: center;
    align-self: center;
    height: 48px;
    margin-top: 16px;
    opacity: 0.7;
    transition: opacity 180ms ease-in-out;

    svg {
      margin-left: 12px;
    }

    &:hover {
      opacity: 1;
    }
  }
`;
