import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};

  padding: 80px 24px 46px 24px;
  flex-direction: row;
  align-items: center;
`;

export const NewMealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  align-items: flex-start;
`;

export const NewMealContainer = styled.View`
  flex: 1;
`;
