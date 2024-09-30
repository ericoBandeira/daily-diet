import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  margin-top: 30px;
`;

export const DayTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 5px;
`;

export const MealBox = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 15px;
  margin-top: 7px;

  flex-direction: row;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  align-items: center;
`;

export const FoodInfoContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Separator = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_4};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

interface ColorProps {
  inDiet: boolean;
}

export const InDietIcon = styled.View<ColorProps>`
  height: 14px;
  width: 14px;
  background-color: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 99px;
`;
