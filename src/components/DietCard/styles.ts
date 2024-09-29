import styled, { css } from "styled-components/native";

interface ContainerColorProps {
  color: "red" | "green";
}

export const Container = styled.View<ContainerColorProps>`
  justify-content: center;
  align-items: center;
  width: 49%;

  background-color: ${({ theme, color }) =>
    color === "red" ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};

  margin-bottom: 12px;
  padding: 17px 27px;
  border-radius: 8px;
`;

export const TextLabel = styled.Text`
  text-align: center;
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
