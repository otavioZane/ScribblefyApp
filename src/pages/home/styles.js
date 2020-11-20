import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';
import {View, Text} from 'react-native';

export const Container = styled(SafeAreaView)`
  align-items: center;
  height: 100%;
  flex: 1;
`;

export const RouteTitle = styled(Text)`
  color: ${({textColor}) => textColor || '#fff'};
  font-size: 22;
  font-weight: bold;
  text-align: center;
  margin-right: auto;
  margin-top: 30px;
  padding: 36px;
`;

export const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-around;
`;
