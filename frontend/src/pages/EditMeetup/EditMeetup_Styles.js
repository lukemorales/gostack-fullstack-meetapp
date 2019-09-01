import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 50px auto;
  padding: 0 30px;

  @media (max-width: 768px) {
    margin: 30px auto;
  }

  .loading {
    display: flex;
    justify-content: center;
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

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      @media (max-width: 580px) {
        flex-direction: column-reverse;
      }

      > button {
        display: flex;
        align-items: center;
        background: none;
        font-weight: bold;
        color: #e65175;
        padding: 8px 16px;
        height: 48px;
        border: 2px solid #e65175;
        transition: all 180ms ease-in-out;

        &:hover {
          background: #e65175;
          color: #fff;
          transform: scale(1.01);

          svg {
            fill: #fff;
          }
        }

        &:active {
          background: ${darken(0.05, '#e65175')};
          border-color: ${darken(0.05, '#e65175')};
          transform: scale(0.99);
          color: #fff;

          svg {
            fill: #fff;
          }
        }

        @media (max-width: 580px) {
          align-self: stretch;
          justify-content: center;
          height: 48px;
        }

        + button {
          background: #4dbaf9;
          color: #fff;
          border: 0;

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
            margin-bottom: 16px;
          }
        }

        svg {
          margin-right: 8px;
        }
      }
    }
  }
`;
