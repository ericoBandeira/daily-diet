import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const NewMealContainer = styled.View`
  width: 100%;
  height: 100%;
  margin-top: -22px;
  border-radius: 20px 20px 0 0;
  align-items: center;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const DoubleContainer = styled.View`
  width: 100%;
  gap: 20%;
  flex-direction: row;
`;
