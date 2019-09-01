import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 12px;
  height: 48px;
  background: #fff;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TxtInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.35)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #444;
`;
