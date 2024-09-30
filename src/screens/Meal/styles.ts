import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const NewMealContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: -22px;
  border-radius: 20px 20px 0 0;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const DoubleContainer = styled.View`
  width: 100%;
  gap: 20%;
  flex-direction: row;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-top: 8px;
`;

export const MealTimeTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 20px;
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-top: 8px;
`;

export const InDietContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  margin-top: 25px;
  padding: 10px 15px;
  border-radius: 1000px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
`;

interface InDietBallProps {
  color: "red" | "green";
}

export const InDietBall = styled.View<InDietBallProps>`
  height: 8px;
  width: 8px;
  background-color: ${({ theme, color }) =>
    color === "green" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 999px;
`;

export const InDietText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const EditButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  padding: 18px;
  align-items: center;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const EditButtontText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 100%;
  padding: 18px;
  align-items: center;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const DeleteButtontText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
