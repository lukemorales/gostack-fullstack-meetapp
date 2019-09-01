import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  max-width: 960px;
  margin: 52px auto;
  padding: 0 32px;

  @media (max-width: 460px) {
    margin: 30px auto;
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    h2 {
      color: #f94d6a;
      font-weight: 300;
      letter-spacing: 0.5px;
      font-size: 28px;
    }

    a {
      background: #f94d6a;
      border-radius: 4px;
      padding: 10px 14px;
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 15px;
      letter-spacing: 0.5px;
      color: #fff;
      transition: all 180ms ease-in-out;

      &:hover {
        background: ${lighten(0.03, '#F94D6A')};
        transform: scale(1.01);
      }

      &:active {
        background: ${darken(0.03, '#F94D6A')};
        transform: scale(0.99);
      }

      svg {
        margin-right: 8px;
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
`;

export const MeetupsList = styled.div`
  > aside {
    text-align: center;
    color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
`;

export const Meetup = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  opacity: ${props => (props.past ? 0.45 : 1)};
  transition: all 120ms ease-in-out;

  + a {
    margin-top: 12px;
  }

  > p {
    margin: 0;
    color: #fff;
    font-size: 20px;
  }

  div {
    color: #eee;
    margin-left: 32px;

    p {
      display: flex;
      align-items: center;
      margin: 0;

      &:first-child {
        white-space: nowrap;
      }

      & + p {
        margin-top: 8px;
      }

      svg {
        margin-right: 12px;
      }
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: scale(1.01);
  }

  &:active {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(0.99);
  }

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 15px 15px;

    > p {
      font-size: 18px !important;
    }

    div {
      margin: 12px 0 0 !important;
    }
  }
`;
