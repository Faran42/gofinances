import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  width: 100%;

  align-items: center;
  padding: 10px;

`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;

  font-family: ${({ theme }) => theme.fonts.medium};
`;