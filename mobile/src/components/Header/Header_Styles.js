import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView.attrs({
  elevation: 2,
})`
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  padding-top: ${() =>
    Platform.OS === 'android' ? StatusBar.currentHeight + 24 : 24};
`;

export const Logo = styled.Image`
  width: 40px;
`;
