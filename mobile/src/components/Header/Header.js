import React from 'react';
import { Container, Logo } from './Header_Styles';

import logo from '~/assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
