import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 50px auto;
  padding: 0 30px;
  @media (max-width: 768px) {
    margin: 30px auto;
  }
  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      background: #fff;
      width: 100%;
      border-radius: 4px;
      height: 48px;
      padding: 0 15px;
      color: #515366;
      margin: 0 0 12px;
      border: 2px solid transparent;
      transition: border 180ms ease-in-out;

      &:focus {
        border: 2px solid #e65175;
      }

      &::placeholder {
        color: #999;
      }
    }

    textarea {
      resize: none;
      height: 200px;
      padding: 15px;
    }

    span {
      display: block;
      color: #e65175;
      margin: -5px 0 10px;
      font-weight: bold;
      text-align: left;
    }

    > button {
      margin: 10px 0 0;
      align-self: flex-end;
      background: #4dbaf9;
      font-weight: bold;
      letter-spacing: 0.5px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 10px 14px;
      font-size: 16px;
      display: flex;
      align-items: center;
      transition: all 180ms ease-in-out;

      svg {
        margin-right: 8px;
      }

      &:hover {
        background: ${lighten(0.03, '#4dbaf9')};
        transform: scale(1.01);
      }

      &:active {
        background: ${darken(0.15, '#4dbaf9')};
        transform: scale(0.99);
      }

      &:disabled {
        opacity: 0.7;
        cursor: wait;
      }

      @media (max-width: 580px) {
        align-self: stretch;
        justify-content: center;
        height: 48px;
      }
    }
  }
`;
