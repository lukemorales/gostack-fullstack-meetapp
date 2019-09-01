import styled from 'styled-components';

export const Container = styled.header`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 32px;
`;

export const Wrapper = styled.div`
  padding: 15px 0;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    h1 {
      img {
        height: 32px;
        width: auto;
      }
    }

    button {
      display: flex;
      align-items: center;
      background: none;
      margin-left: 28px;
      color: #eee;

      svg {
        margin-right: 2px;
        transition: transform 180ms ease-in-out;
      }

      &:hover svg {
        transform: translateX(-2px);
      }
    }
  }

  section {
    a {
      display: flex;
      align-items: center;
      color: #f5ebec;

      @media (max-width: 460px) {
        font-size: 0;
        img {
          margin: 0;
        }
      }
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 16px;
      border: 2px solid #8e3343;
    }
  }
`;
