import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  half: boolean;
}

export const Container = styled.View<ContainerProps>`
  justify-content: flex-start;
  width: ${({ half }) => (half ? "47%" : "100%")};
  margin-top: 20px;
`;

export const InputTitle = styled.Text``;

interface InputTextProps {
  size: "sm" | "lg";
}

export const InputText = styled(TextInput).attrs({
  textAlignVertical: "top",
  multiline: true,
})<InputTextProps>`
  width: 100%;
  height: ${({ size }) => (size === "sm" ? "48px" : "120px")};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 12px;
  margin-top: 7px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;
