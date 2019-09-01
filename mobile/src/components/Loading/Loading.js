import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './Loading_Styles';

export default function Loading() {
  return (
    <Container>
      <ActivityIndicator color="#e5556e" />
    </Container>
  );
}
