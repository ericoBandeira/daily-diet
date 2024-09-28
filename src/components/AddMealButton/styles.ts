import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  margin-top: 44px;
`;

export const Title = styled.Text``;

export const AddButton = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};

  margin-top: 10px;
  padding: 16px;
  border-radius: 8px;

  flex-direction: row;
  gap: 6px;
`;

export const TextButto = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
