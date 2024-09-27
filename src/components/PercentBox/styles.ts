import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  justify-content: space-between;
  margin-top: 33px;
  padding: 8px;

  align-items: center;

  border-radius: 8px;
`;

export const PercentNumber = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL};
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const PercentText = styled.Text``;
