import styled, { css } from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  width: 100%;

  margin-bottom: 12px;
  padding: 17px 27px;
  border-radius: 8px;
`;

export const TextLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const NumberLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XL};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 5;
`;
