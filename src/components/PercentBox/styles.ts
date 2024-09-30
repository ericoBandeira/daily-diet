import styled, { css } from "styled-components/native";

interface ContainerProps {
  color: "red" | "green";
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${({ theme, color }) =>
    color === "green" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  justify-content: space-between;
  margin-top: 33px;
  padding: 8px;

  align-items: center;

  border-radius: 8px;
`;

export const IconContainer = styled.View`
  width: 100%;
  flex-direction: row-reverse;
`;

export const PercentNumber = styled.Text`
  margin-top: -15px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XXL};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const PercentText = styled.Text`
  margin-bottom: 12px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const IconButton = styled.TouchableOpacity``;
