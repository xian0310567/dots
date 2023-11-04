import styled from 'styled-components/native';

import Color from '@/components/feature/AddEventModal/ColorPicker';
import TextInput from '@/components/atom/TextInput';

export const ColorPicker = styled(Color)`
  margin-top: 10px;
`;

export const Input = styled(TextInput)<{color: '#ffffff' | '#000000'}>`
  padding: 6px;
  color: ${props => props.color};
`;
