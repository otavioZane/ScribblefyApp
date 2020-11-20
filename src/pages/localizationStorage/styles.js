import styled from 'styled-components/native';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export const Container = styled(View)`
  align-items: center;
  height: 100%;
  background-color: #000;
`;

export const InputText = styled(TextInput)`
  background: #fff;
  width: 100%;
  border-radius: 14px;
  border: 1px #d9d9d9;
  padding: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const InputLabel = styled.Text`
  color: ${({textColor}) => textColor || '#6f78f6'};
  font-size: 16;
  font-weight: bold;
  text-align: left;
  margin-right: auto;
  padding: 9px;
`;

const RoundButton = ({onPress, text, textColor, backgroundColor}) => (
  <ButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
    <ButtonText textColor={textColor}>{text}</ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled(TouchableOpacity)`
  border-color: #ccc;
  background: ${({backgroundColor}) => backgroundColor || '#fff'};
  border-radius: 50;
  border-width: 1;
  padding: 12px;
  margin: 10px;
  width: 280;
`;

const ButtonText = styled(Text)`
  color: ${({textColor}) => textColor || '#6f78f6'};
  font-size: 20;
  justify-content: center;
  text-align: center;
`;

export default RoundButton;
