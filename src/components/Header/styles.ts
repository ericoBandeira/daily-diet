import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex-direction: row;
  justify-content: space-between;

  margin-top: 64px;
`;

export const LogoContainer = styled.Image``;

export const PhotoContainer = styled.Image`
  height: 40px;
  width: 40px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 999px;
`;
