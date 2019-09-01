import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(0, 0, 0, 0.03);
  margin: 12px 0 16px;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 12px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 4px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 20px;
  background: #f64c75;
`;
