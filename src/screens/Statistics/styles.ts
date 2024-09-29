import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const StatisticsContainer = styled.View`
  width: 100%;
  height: 100%;
  margin-top: -22px;
  border-radius: 20px 20px 0 0;
  align-items: center;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const StatisticsTitle = styled.Text`
  margin-top: 12px;
  margin-bottom: 25px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const DietCardContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 10%;
`;
