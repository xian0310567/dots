import styled from 'styled-components/native';

import FolderSVG from '@/assets/folder.svg';
import ArrowSVG from '@/assets/arrow.svg';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;
`;

export const DescriptionBlock = styled.View`
  display: flex;
  flex-direction: row;
`;

export const FolderImage = styled(FolderSVG)`
  width: 40px;
  height: 40px;
`;

export const Text = styled.Text`
  margin-left: 10px;
`;

export const ArrowImage = styled(ArrowSVG)`
  width: 25px;
  height: 25px;
`;
