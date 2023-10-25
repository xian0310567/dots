import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 50px;
  flex-direction: row;
  justify-content: center;
`;

export const Space = styled.View`
  width: 95%;
  height: 100%;
  border-radius: 15px;
  padding: 0 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #adadad;
  font-weight: 700;
`;
