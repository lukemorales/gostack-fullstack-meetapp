import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import history from '~/services/history';

import logo from '~/assets/logo.svg';
import { Container, Wrapper } from './Header_Styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const {
    location: { pathname },
    goBack,
  } = history;

  return (
    <Container>
      <Wrapper>
        <nav>
          <h1>
            <Link to="/dashboard">
              <img src={logo} alt="MeetApp" />
            </Link>
          </h1>
          {pathname !== '/dashboard' && (
            <button type="button" onClick={goBack}>
              <MdArrowBack size={18} />
              Voltar
            </button>
          )}
        </nav>

        <section>
          <Link to="/profile">
            <img
              src={`https://ui-avatars.com/api/?background=D44059&color=fff&name=${profile.name}`}
              alt={profile.name}
            />
            {profile.name}
          </Link>
        </section>
      </Wrapper>
    </Container>
  );
}
