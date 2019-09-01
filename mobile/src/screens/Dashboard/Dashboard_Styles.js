import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const DateSelect = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const DateButton = styled(TouchableOpacity)``;

export const DateText = styled.Text`
  font-size: 18px;
  color: #eee;
  font-weight: bold;
  margin: 0 15px;
`;

export const Empty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  color: #bbb;
  margin-top: 16px;
  max-width: 280px;
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
