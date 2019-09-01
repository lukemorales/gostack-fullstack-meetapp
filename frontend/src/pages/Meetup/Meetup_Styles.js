import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.main`
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
`;

export const Details = styled.div`
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    h2 {
      color: #F94D6A;
      font-weight: normal;
      font-size: 28px;
    }

    nav {
      display: flex;
    }

    button {
      border-radius: 4px;
      padding: 8px 16px;
      display: flex;
      align-items: center;
      font-weight: bold;
      color: #fff;
      transition: background 180ms ease-in-out;
      background: #4dbaf9;

        &:hover {
          background: ${lighten(0.03, '#4dbaf9')};
        }

        &:active {
          background: ${darken(0.15, '#4dbaf9')};
        }
      }

      svg {
        margin-right: 6px;
      }
    }

    @media (max-width: 460px) {
      flex-direction: column;
      margin-bottom: 30px;

      h2 {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }
  }

  article {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0px 10px 45px rgba(255, 255, 255, 0.17);


    > div:first-child {
      overflow: hidden;
      background: #ebebeb;
      height: 340px;
      width: 100%;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    > div + div {
      padding: 25px 30px 30px;

      @media (max-width: 768px) {
        padding: 15px 20px 20px;
      }

      > p {
        font-size: 16px;
        margin: 0 0 30px;
        color: #6f4e56;
      }

    }

    footer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
      padding-top: 20px;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      p {
        color: #333;
        display: flex;
        align-items: center;

        + p {
          margin-top: 8px;
        }

        svg {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const Subscriptions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* align-items: flex-start; */
  margin-top: 15px;

  /* @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;
  } */

  div {
    display: flex;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 3px solid #fff;
      + img {
        margin-left: -20px;
      }
    }
  }

  span {
    margin-top: 12px;
    color: #666;

    strong {
      color: #f94d6a;
    }
  }
`;
