import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'Roboto-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 78px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 44px;
`;

export const UserAvatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  align-self: center;
`;
