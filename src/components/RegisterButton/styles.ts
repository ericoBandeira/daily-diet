import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const RegisterButtonContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  padding: 20px;
  align-items: center;
  border-radius: 6px;
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
