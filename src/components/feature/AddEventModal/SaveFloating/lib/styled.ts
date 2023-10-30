import styled from 'styled-components/native';

import {Text} from 'react-native';

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 20px;
  background-color: #444;
  width: 120px;
  height: 40px;
  bottom: 20px;
  left: 34%;
`;

export const Title = styled(Text)`
  font-weight: 600;
  color: #999;
`;
