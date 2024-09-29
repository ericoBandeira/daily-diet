import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: 26px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `};
`;

export const InOrOutContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
`;

interface ButtonProps {
  diet: boolean;
}

export const YesButton = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  background-color: ${({ theme, diet }) =>
    diet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_6};
  border: ${({ theme, diet }) =>
    diet ? `1px solid ${theme.COLORS.GREEN_DARK}` : "none"};

  padding: 20px 60px;
  flex-direction: row;
  gap: 8px;
  border-radius: 6px;
`;

export const NoButton = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  background-color: ${({ theme, diet }) =>
    diet ? theme.COLORS.GRAY_6 : theme.COLORS.RED_LIGHT};
  border: ${({ theme, diet }) =>
    diet ? "none" : `1px solid ${theme.COLORS.RED_DARK}`};

  padding: 20px 60px;
  flex-direction: row;
  gap: 8px;
  border-radius: 6px;
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `};
`;

interface ColorBallProps {
  color: "red" | "green";
}

export const ColorBall = styled.View<ColorBallProps>`
  background-color: ${({ theme, color }) =>
    color === "green" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  height: 8px;
  width: 8px;
  border-radius: 99px;
`;
