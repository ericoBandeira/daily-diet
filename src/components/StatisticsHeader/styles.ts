import styled, { css } from "styled-components/native";

interface ContainerProps {
  color: "red" | "green";
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${({ theme, color }) =>
    color === "green" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  padding: 80px 24px 24px 24px;
`;

export const PercentNumber = styled.Text`
  margin-top: -10px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XXL};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const PercentText = styled.Text`
  margin-bottom: 34px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const BackButton = styled.TouchableOpacity`
  width: 20%;
`;

export const InfoContainer = styled.View`
  align-items: center;
`;
